document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    const recentPostsLinksContainer = document.getElementById('recent-posts-links');
    const discordCustomInfo = document.getElementById('discord-custom-info');
    const themeToggleButton = document.getElementById('theme-toggle');
    const mainNav = document.getElementById('main-nav');
    const themeAnnouncer = document.getElementById('theme-announcer');
    const searchInput = document.getElementById('search-input');
    const searchClearButton = document.getElementById('search-clear-button');
    document.getElementById('current-year').textContent = new Date().getFullYear();

    let allPostsData = [];
    let isSearchActive = false;

    const POST_FILENAMES = [
        'piracy.md',
        'customwindows.md'
    ];

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleButton.setAttribute('aria-label', 'Switch to Light Theme');
            themeToggleButton.setAttribute('aria-pressed', 'true');
            if (themeAnnouncer) themeAnnouncer.textContent = 'Dark theme enabled.';
        } else {
            document.body.classList.remove('dark-theme');
            themeToggleButton.setAttribute('aria-label', 'Switch to Dark Theme');
            themeToggleButton.setAttribute('aria-pressed', 'false');
            if (themeAnnouncer) themeAnnouncer.textContent = 'Light theme enabled.';
        }

        const discordIframe = document.querySelector('.discord-iframe-container iframe');
        if (discordIframe) {
            try {
                const currentUrl = new URL(discordIframe.src);
                const discordWidgetHost = "discord.com";
                
                if (currentUrl.hostname.endsWith(discordWidgetHost)) {
                    const newDiscordTheme = (theme === 'dark') ? 'dark' : 'light';
                    currentUrl.searchParams.set('theme', newDiscordTheme);
                    
                    const serverIdFromCurrentSrc = currentUrl.searchParams.get('id');
                    const targetServerId = '1374137227571105904';
                    if (!serverIdFromCurrentSrc || serverIdFromCurrentSrc !== targetServerId) {
                         currentUrl.searchParams.set('id', targetServerId);
                    }

                    if (discordIframe.src !== currentUrl.toString()) {
                        discordIframe.src = currentUrl.toString();
                    }
                }
            } catch (e) {
                const serverId = '1374137227571105904';
                const newDiscordTheme = (theme === 'dark') ? 'dark' : 'light';
                discordIframe.src = `https://discord.com/widget?id=${serverId}&theme=${newDiscordTheme}`;
            }
        }
    };

    const toggleTheme = () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };

    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }

    const loadInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    };

    const parseFrontmatterAndContent = (markdownText) => {
        const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
        const match = frontmatterRegex.exec(markdownText);
        const meta = {};
        let content = markdownText;

        if (match) {
            const frontmatterBlock = match[1];
            content = markdownText.substring(match[0].length).trim();

            frontmatterBlock.split('\n').forEach(line => {
                const parts = line.split(':');
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    let value = parts.slice(1).join(':').trim();
                    if (value.startsWith('"') && value.endsWith('"')) {
                        value = value.substring(1, value.length -1);
                    }
                    if (value.startsWith("'") && value.endsWith("'")) {
                        value = value.substring(1, value.length -1);
                    }
                    meta[key] = value;
                }
            });
        }
        meta.featured = (meta.featured === 'true' || meta.featured === true);
        return { meta, content };
    };

    const slugify = (text) => {
        if (!text) return '';
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, '');
    };

    const fetchAndProcessPost = async (filename) => {
        try {
            const response = await fetch(`posts/${filename}`);
            if (!response.ok) {
                return null;
            }
            const markdownText = await response.text();
            const { meta, content } = parseFrontmatterAndContent(markdownText);

            if (!meta.title) {
                meta.title = filename.replace(/\.md$/, '').replace(/-/g, ' ');
            }
            if (!meta.date) {
                meta.date = new Date().toISOString().split('T')[0];
            }
            meta.slug = slugify(meta.slug || meta.title || filename.replace(/\.md$/, ''));
            meta.author = meta.author || "Anonymous";
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = marked.parse(content.substring(0, 350));
            const rawSnippet = tempDiv.textContent || tempDiv.innerText || "";
            meta.snippet = meta.snippet || rawSnippet.substring(0, 150).trim() + (content.length > 150 ? "..." : "");

            return { meta, content, originalFilename: filename };

        } catch (error) {
            return null;
        }
    };

    const loadAllPosts = async () => {
        if (POST_FILENAMES.length === 0) {
            allPostsData = [];
            return;
        }
        const postPromises = POST_FILENAMES.map(filename => fetchAndProcessPost(filename));
        const results = await Promise.all(postPromises);

        allPostsData = results.filter(post => post !== null);
        allPostsData.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
    };

    const focusOnMainContent = (selector = '#app-content') => {
        setTimeout(() => {
            let elementToFocus = appContent.querySelector(selector);
            if (!elementToFocus && selector === '#app-content') {
                elementToFocus = appContent; 
            } else if (!elementToFocus) {
                elementToFocus = appContent.firstChild;
            }

            if (elementToFocus) {
                const tagName = elementToFocus.tagName;
                const isNaturallyFocusable = ['INPUT', 'BUTTON', 'A', 'TEXTAREA', 'SELECT'].includes(tagName);
                const hasTabindex = elementToFocus.hasAttribute('tabindex');

                if (!isNaturallyFocusable && !hasTabindex && elementToFocus !== appContent) {
                     elementToFocus.setAttribute('tabindex', '-1');
                }
                
                elementToFocus.focus({ preventScroll: true });
                
                const elementRect = elementToFocus.getBoundingClientRect();
                if (elementRect.top < 0 || elementRect.bottom > window.innerHeight || elementRect.left < 0 || elementRect.right > window.innerWidth ) {
                    elementToFocus.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                }
            }
        }, 100);
    };

    const createPostElement = (postData, isFeaturedFlag) => {
        const postElement = document.createElement('article');
        postElement.className = 'post-list-item';
        if (isFeaturedFlag) {
            postElement.classList.add('post-list-item--featured');
        }
        postElement.setAttribute('aria-labelledby', `post-title-${postData.meta.slug}`);
        postElement.setAttribute('role', 'listitem');

        let featuredBadgeHTML = '';
        if (isFeaturedFlag) {
            featuredBadgeHTML = `<span class="featured-badge">Featured</span>`;
        }

        postElement.innerHTML = `
            ${featuredBadgeHTML}
            <h2 id="post-title-${postData.meta.slug}"><a href="#/post/${postData.meta.slug}">${postData.meta.title}</a></h2>
            <p class="post-meta">Published on ${new Date(postData.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by ${postData.meta.author}</p>
            <p class="post-snippet">${postData.meta.snippet}</p>
            <a href="#/post/${postData.meta.slug}" class="read-more-link" aria-label="Read more about ${postData.meta.title}">Read More &rarr;</a>
        `;
        return postElement;
    };

    const clearSearch = () => {
        if (searchInput.value !== '') {
            searchInput.value = '';
            if(searchClearButton) searchClearButton.style.display = 'none';
            isSearchActive = false;
            renderHomePage();
            updateActiveNavLink('home');
        }
    };
    
    const renderHomePage = () => {
        appContent.innerHTML = ''; 
        isSearchActive = false;

        const featuredPosts = allPostsData.filter(post => post.meta.featured === true);
        const regularPosts = allPostsData.filter(post => post.meta.featured !== true);

        let firstFocusSelector = null;

        if (featuredPosts.length > 0) {
            const featuredSection = document.createElement('section');
            featuredSection.className = 'featured-posts-section fade-in';
            featuredSection.setAttribute('aria-labelledby', 'featured-posts-heading');

            const featuredHeading = document.createElement('h2');
            featuredHeading.id = 'featured-posts-heading';
            featuredHeading.className = 'section-title';
            featuredHeading.textContent = 'Featured Posts';
            featuredSection.appendChild(featuredHeading);
            
            const featuredListContainer = document.createElement('div');
            featuredListContainer.className = 'post-list';
            featuredListContainer.setAttribute('role', 'list');

            featuredPosts.forEach(postData => {
                const postElement = createPostElement(postData, true);
                featuredListContainer.appendChild(postElement);
            });
            featuredSection.appendChild(featuredListContainer);
            appContent.appendChild(featuredSection);
            if (!firstFocusSelector) {
                firstFocusSelector = '.featured-posts-section .post-list-item:first-child h2 a';
            }
        }

        if (regularPosts.length > 0) {
            const regularSection = document.createElement('section');
            regularSection.className = 'regular-posts-section fade-in';

            if (featuredPosts.length > 0) {
                const regularHeading = document.createElement('h2');
                regularHeading.id = 'regular-posts-heading';
                regularHeading.className = 'section-title';
                regularHeading.textContent = 'More Posts';
                regularSection.appendChild(regularHeading);
            }
            
            const listContainer = document.createElement('div');
            listContainer.className = 'post-list';
            listContainer.setAttribute('role', 'list');
            regularPosts.forEach(postData => {
                const postElement = createPostElement(postData, false);
                listContainer.appendChild(postElement);
            });
            regularSection.appendChild(listContainer);
            appContent.appendChild(regularSection);
            if (!firstFocusSelector) {
                firstFocusSelector = '.regular-posts-section .post-list-item:first-child h2 a';
            }
        }

        if (allPostsData.length === 0) {
            let message = '';
            if (POST_FILENAMES.length > 0) {
                message = `<p class="loading-message fade-in">Could not load any posts. Check console for errors.</p>`;
            } else {
                message = `<p class="loading-message fade-in">No posts yet! Add Markdown files to the '/posts/' directory and their filenames to the POST_FILENAMES array in 'js/script.js'.</p>`;
            }
            appContent.innerHTML = message;
            if (!firstFocusSelector) firstFocusSelector = 'p.loading-message';
        }
        
        updateRecentPostsSidebar();

        if (firstFocusSelector) {
            const targetElement = appContent.querySelector(firstFocusSelector);
            if (targetElement) {
                focusOnMainContent(firstFocusSelector);
            } else {
                focusOnMainContent(); 
            }
        } else {
            focusOnMainContent();
        }
    };

    const renderSearchResults = (results, query) => {
        appContent.innerHTML = '';
        isSearchActive = true;

        const resultsHeading = document.createElement('h2');
        resultsHeading.className = 'search-results-heading';
        
        if (results.length > 0) {
            resultsHeading.textContent = `Search Results for: "${query}"`;
            appContent.appendChild(resultsHeading);

            const listContainer = document.createElement('div');
            listContainer.className = 'post-list fade-in';
            listContainer.setAttribute('role', 'list');
            results.forEach(postData => {
                const postElement = createPostElement(postData, postData.meta.featured);
                listContainer.appendChild(postElement);
            });
            appContent.appendChild(listContainer);
        } else {
            resultsHeading.textContent = `No results found for: "${query}"`;
            appContent.appendChild(resultsHeading);
        }
        updateActiveNavLink('');
    };

    const performSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase().trim();
        if (searchClearButton) {
            searchClearButton.style.display = lowerCaseQuery ? 'block' : 'none';
        }

        if (!lowerCaseQuery) {
            if(isSearchActive) {
                isSearchActive = false; 
                renderHomePage();
                updateActiveNavLink('home');
            }
            return;
        }

        const filteredResults = allPostsData.filter(post => {
            const titleMatch = post.meta.title.toLowerCase().includes(lowerCaseQuery);
            const snippetMatch = post.meta.snippet.toLowerCase().includes(lowerCaseQuery);
            const authorMatch = post.meta.author.toLowerCase().includes(lowerCaseQuery);
            const contentMatch = post.content.toLowerCase().includes(lowerCaseQuery);
            return titleMatch || snippetMatch || authorMatch || contentMatch;
        });

        renderSearchResults(filteredResults, query);
    };
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
    }
    if (searchClearButton) {
        searchClearButton.addEventListener('click', clearSearch);
    }

    const renderPostDetail = (slug) => {
        if (searchInput) searchInput.value = '';
        if (searchClearButton) searchClearButton.style.display = 'none';
        isSearchActive = false;
        const postData = allPostsData.find(p => p.meta.slug === slug);
        appContent.innerHTML = ''; 

        if (postData) {
            const htmlContent = marked.parse(postData.content);
            const article = document.createElement('article');
            article.className = 'full-post-content fade-in';
            article.setAttribute('aria-labelledby', 'post-title');
            article.innerHTML = `
                <a href="#/" class="back-to-blog-link">&larr; Back to Blog</a>
                <h1 id="post-title" tabindex="-1">${postData.meta.title}</h1>
                <p class="post-meta">Published on ${new Date(postData.meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} by ${postData.meta.author}</p>
                <div class="post-body">${htmlContent}</div>
                <a href="#/" class="back-to-blog-link">&larr; Back to Blog</a>
            `;
            appContent.appendChild(article);
            focusOnMainContent('#post-title');
        } else {
            appContent.innerHTML = `<p class="loading-message fade-in" tabindex="-1">Post not found. It might have been moved or the link is incorrect. <a href="#/">Return to homepage</a>.</p>`;
            focusOnMainContent('.loading-message');
        }
        updateRecentPostsSidebar();
    };

    const renderAboutPage = () => {
        if (searchInput) searchInput.value = '';
        if (searchClearButton) searchClearButton.style.display = 'none';
        isSearchActive = false;
        appContent.innerHTML = ``;
        const pageContent = document.createElement('div');
        pageContent.className = 'static-page-content fade-in';
        pageContent.setAttribute('aria-labelledby', 'about-page-title');
        pageContent.innerHTML = `
            <h1 id="about-page-title" tabindex="-1">About Forged</h1>
            <p>A forged blog for blacksmiths to gather round.</p>
            <h2>The Technology</h2>
            <p>This blog is a pure client-side application built with HTML, CSS, and JavaScript. Posts are written in Markdown and dynamically loaded and rendered. This approach keeps things lightweight and easy to manage for simple use cases.</p>
        `;
        appContent.appendChild(pageContent);
        focusOnMainContent('#about-page-title');
    };

    const renderContactPage = () => {
        if (searchInput) searchInput.value = '';
        if (searchClearButton) searchClearButton.style.display = 'none';
        isSearchActive = false;
        appContent.innerHTML = ``;
        const pageContent = document.createElement('div');
        pageContent.className = 'static-page-content fade-in';
        pageContent.setAttribute('aria-labelledby', 'contact-page-title');
        pageContent.innerHTML = `
            <h1 id="contact-page-title" tabindex="-1">Contact Me</h1>
            <p>The best way to reach me is on Discord.</p>
            <p>My Discord username: <strong>Fernbacher</strong></p>
            <p>Feel free to send a friend request or message if we share a mutual server!</p>
        `;
        appContent.appendChild(pageContent);
        focusOnMainContent('#contact-page-title');
    };

    const updateRecentPostsSidebar = () => {
        if (!recentPostsLinksContainer) return;
        recentPostsLinksContainer.innerHTML = '';
        if (allPostsData.length === 0 && POST_FILENAMES.length > 0) {
             recentPostsLinksContainer.innerHTML = '<li>No posts loaded.</li>';
             return;
        }
         if (allPostsData.length === 0 && POST_FILENAMES.length === 0) {
             recentPostsLinksContainer.innerHTML = '<li>No posts yet.</li>';
             return;
        }

        const recentToDisplay = allPostsData.slice(0, 5);
        recentToDisplay.forEach(postData => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#/post/${postData.meta.slug}">${postData.meta.title}</a>`;
            recentPostsLinksContainer.appendChild(li);
        });
    };

    const updateActiveNavLink = (currentRoute) => {
        if (!mainNav) return;
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
            if (link.dataset.route === currentRoute && !isSearchActive) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    };

    const handleRouteChange = () => {
        const hash = window.location.hash;
        
        if (searchInput && searchInput.value.trim() !== '' && (hash !== '#/' && hash !== '')) {
        } else {
            if (searchInput) searchInput.value = '';
            if (searchClearButton) searchClearButton.style.display = 'none';
            isSearchActive = false;
        }

        if (isSearchActive && searchInput && searchInput.value.trim() !== '') {
            performSearch(searchInput.value.trim());
            updateActiveNavLink('');
            return; 
        }
        
        appContent.innerHTML = `<p class="loading-message">Loading...</p>`; 
        let currentRoute = 'home';

        if (hash.startsWith('#/post/')) {
            renderPostDetail(slugify(hash.substring('#/post/'.length)));
            currentRoute = 'post'; 
        } else if (hash === '#/about') {
            renderAboutPage();
            currentRoute = 'about';
        } else if (hash === '#/contact') {
            renderContactPage();
            currentRoute = 'contact';
        } else { 
            renderHomePage(); 
            currentRoute = 'home';
        }
        updateActiveNavLink(currentRoute);
    };

    const fetchDiscordInfo = async () => {
        if (!discordCustomInfo) return;
        try {
            const response = await fetch('https://discord.com/api/guilds/1374137227571105904/widget.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();

            if (data.name && data.presence_count !== undefined) {
                discordCustomInfo.innerHTML = `
                    <p><strong>${data.name}</strong></p>
                    <p>${data.presence_count} members online</p>
                `;
            } else if (data.message) {
                discordCustomInfo.innerHTML = `<p>Server info: ${data.message}</p>`;
            } else {
                discordCustomInfo.innerHTML = `<p>Could not retrieve server details.</p>`;
            }
        } catch (error) {
            discordCustomInfo.innerHTML = `<p>Could not load server details due to a network error.</p>`;
        }
    };

    const initializeApp = async () => {
        loadInitialTheme();
        await loadAllPosts();
        handleRouteChange();
        fetchDiscordInfo();

        window.addEventListener('hashchange', handleRouteChange);
    };

    initializeApp();
});
