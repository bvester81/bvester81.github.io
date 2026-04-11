// ==========================================
// 1. HEADER & MENU HTML
// ==========================================
const headerHTML = `
    <header>
        <a href="index.html" style="text-decoration: none; display: flex; align-items: center;">
            <img src="logo.svg" alt="True Control Logo" style="height: 60px;" onerror="this.style.display='none'">
            <span class="header-slogan">True Control: Simply in control.</span>
        </a>
        
        <div class="header-right">
            <div class="lang-switch">
                <a href="index.html" class="lang-dk">DK</a>
                <span class="lang-divider">|</span>
                <a href="index_en.html" class="lang-en">EN</a>
            </div>
            
            <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </header>

    <nav class="side-menu" id="sideMenu">
        <ul class="menu-list">
            <li><a href="index.html" class="menu-item nav-link">Gå til Forsiden</a></li>
            
            <li>
                <div class="menu-item" id="expertiseToggle">
                    Ekspertiser <span class="arrow">▼</span>
                </div>
                <ul class="sub-menu" id="expertiseSub">
                    <li><a href="aveva_operations.html" class="nav-link">AVEVA Operations</a></li>
                    <li><a href="aveva_mes.html" class="nav-link">AVEVA MES</a></li>
                    <li><a href="oee_solutions.html" class="nav-link">OEE & Maskinintegration</a></li>
                    <li><a href="lokal-ai.html" class="nav-link">AI review af håndskrift</a></li>
                </ul>
            </li>
            <li>
                <div class="menu-item" id="downloadsToggle">
                    Branding <span class="arrow">▼</span>
                </div>
                <ul class="sub-menu" id="downloadsSub">
                    <li><a href="download_logo.html" class="nav-link">Logo konverter</a></li>
                    <li><a href="farver.html" class="nav-link">Farvepalette</a></li>
                </ul>
            </li>


            <li><a href="index.html#kontakt" class="menu-item nav-link">Kontakt</a></li>
        </ul>
    </nav>
    
    <div class="overlay" id="overlay"></div>
`;

// Resten af din menu.js logik følger herunder...
// (Indsæt selv din logik for toggles, scroll og footer fra dit tidligere script)
