const portfolioProjects = [
    {
        id: "glowiva",
        name: "Glowiva",
        image: "images/projects/glowiva-preview.svg",
        imageAlt: "Illustrated preview of the Glowiva beauty and skincare store",
        summary: "A full-stack beauty and skincare store with shopping, order management, and an administration area.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        description: "Glowiva is a beauty and skincare e-commerce platform. Customers can browse products by category, brand, or skin type, manage a cart and wishlist, place and track orders, and leave reviews. An administration area supports product, order, user, category, coupon, and banner management.",
        liveUrl: "https://muhtasim4you.github.io/Glowiva/",
        repositoryUrl: "https://github.com/muhtasim4you/Glowiva",
        challenges: [
            "Connecting product discovery, accounts, cart, checkout, and order tracking into one consistent customer journey.",
            "Supporting distinct customer and administrator workflows, including protected pages and catalogue management.",
            "Handling payments and product images while keeping the storefront responsive."
        ],
        improvements: [
            "Add automated end-to-end coverage for checkout, account access, and administrative workflows.",
            "Expand monitoring and validation around payment-provider callbacks and production order states.",
            "Improve image delivery and accessibility checks as the catalogue grows."
        ],
        notice: "The README-listed glowivaa.cloud domain currently serves a TastyMeals page. The live link above uses the verified Glowiva GitHub Pages deployment instead."
    },
    {
        id: "tastymeals",
        name: "TastyMeals",
        image: "images/projects/tastymeals-preview.png",
        imageAlt: "Illustrated preview of the TastyMeals food ordering platform",
        summary: "A food delivery and restaurant management platform with customer, merchant, and admin experiences.",
        stack: ["React", "Node.js", "Express", "MongoDB"],
        description: "TastyMeals brings restaurant discovery and ordering together with merchant tools and an admin dashboard. The project also includes rewards, promotions, customer support, diet planning, job listings, and food-waste tracking and donation workflows.",
        liveUrl: "https://muhtasim4you.github.io/TastyMeals-AdvanceFoodDeliveryPlatform/",
        repositoryUrl: "https://github.com/muhtasim4you/TastyMeals-AdvanceFoodDeliveryPlatform",
        challenges: [
            "Coordinating customer, merchant, and administrator workflows across a large set of routes and features.",
            "Keeping cart, order, rewards, notifications, and account data connected to authenticated API requests.",
            "Representing payment choices and checkout behavior without implying that demo payment methods are live transactions."
        ],
        improvements: [
            "Integrate and test a real payment provider before accepting live payments.",
            "Add broader automated tests for order state changes and role-based access.",
            "Continue refining the user experience and operational safeguards for restaurant and delivery workflows."
        ],
        notice: "The README describes the payment options as demo/mock flows; checkout is not connected to a live payment gateway."
    },
    {
        id: "fit-log",
        name: "Fit-Log",
        image: "images/projects/fit-log-preview.png",
        imageAlt: "Illustrated preview of the Fit-Log workout library and daily training plan",
        summary: "A responsive workout library and training log for finding exercises and planning a daily session.",
        stack: ["Next.js", "React", "Tailwind CSS"],
        description: "Fit-Log lets users browse and search a workout library, view exercise instructions, and build a daily plan of up to five lifts. Users can save exercises and track completed work; plan selections are stored locally in the browser.",
        liveUrl: "https://fit-log-opdu.vercel.app/",
        repositoryUrl: "https://github.com/muhtasim4you/Fit-Log",
        challenges: [
            "Keeping exercise discovery useful with search, muscle-group and equipment details, and sortable workout data.",
            "Providing clear loading and error states while workout information is fetched from external API endpoints.",
            "Maintaining plan, saved, and completed exercise state in the browser without a user account."
        ],
        improvements: [
            "Offer optional account-based synchronization and backup across devices.",
            "Add longer-term training history and progress visualizations.",
            "Expand workout filtering and let users customize daily plan limits."
        ],
        notice: ""
    }
];

function createProjectCard(project) {
    const tags = project.stack.slice(0, 3).map(function (technology) {
        return `<span class="project-tag">${technology}</span>`;
    }).join("");
    const previewClass = project.id === "tastymeals" || project.id === "fit-log"
        ? "project-card-image project-card-image-board"
        : "project-card-image";

    return `<article class="project-card">
        <img class="${previewClass}" src="${project.image}" alt="${project.imageAlt}" loading="lazy">
        <div class="project-card-content">
            <h3>${project.name}</h3>
            <p>${project.summary}</p>
            <div class="project-tags" aria-label="Technology stack">${tags}</div>
            <a class="project-card-link" href="project-details.html?project=${project.id}">
                View Project Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
        </div>
    </article>`;
}

const projectGrid = document.getElementById("project-grid");
if (projectGrid) {
    projectGrid.innerHTML = portfolioProjects.map(createProjectCard).join("");
}

const projectDetail = document.getElementById("project-detail");
if (projectDetail) {
    const projectId = new URLSearchParams(window.location.search).get("project");
    const project = portfolioProjects.find(function (item) {
        return item.id === projectId;
    });

    if (project) {
        document.title = `${project.name} | Muhtasim’s Projects`;
        const challenges = project.challenges.map(function (item) {
            return `<li>${item}</li>`;
        }).join("");
        const improvements = project.improvements.map(function (item) {
            return `<li>${item}</li>`;
        }).join("");
        const stack = project.stack.map(function (technology) {
            return `<span class="project-tag">${technology}</span>`;
        }).join("");
        const notice = project.notice ? `<p class="detail-notice">${project.notice}</p>` : "";
        const detailImageClass = project.id === "tastymeals" || project.id === "fit-log"
            ? "detail-image detail-image-board"
            : "detail-image";

        projectDetail.innerHTML = `<a class="back-link" href="index.html#projects">
                <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> Back to all projects
            </a>
            <div class="detail-hero">
                <div>
                    <p class="eyebrow">Project details</p>
                    <h1>${project.name}</h1>
                    <p class="detail-summary">${project.description}</p>
                    <div class="detail-stack" aria-label="Main technology stack">${stack}</div>
                    <div class="detail-actions">
                        <a class="btn-primary" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">
                            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Project
                        </a>
                        <a class="btn-secondary" href="${project.repositoryUrl}" target="_blank" rel="noopener noreferrer">
                            <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub Repository
                        </a>
                    </div>
                </div>
                <img class="${detailImageClass}" src="${project.image}" alt="${project.imageAlt}">
            </div>
            <div class="detail-sections">
                <section class="detail-block">
                    <h2>Development challenges</h2>
                    <ul>${challenges}</ul>
                </section>
                <section class="detail-block">
                    <h2>Potential improvements</h2>
                    <ul>${improvements}</ul>
                </section>
            </div>
            ${notice}`;
    } else {
        document.title = "Project not found | Muhtasim’s Projects";
        projectDetail.innerHTML = `<div class="not-found">
            <p class="eyebrow">Project not found</p>
            <h1 class="section-title">That project isn’t available.</h1>
            <p class="section-description">Choose another project from the portfolio.</p>
            <a class="btn-primary" href="index.html#projects">Browse projects</a>
        </div>`;
    }
}
