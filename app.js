// Application State Management
let appState = {
    currentUser: null,
    currentSection: 'home',
    selectedDate: null,
    selectedTime: null,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    currentOrderTab: 'inquiry',
    
    // Data from provided JSON
    companyInfo: {
        name: "TechSolutions Enterprise",
        tagline: "Innovative Technology Solutions Across All Sectors",
        description: "Leading provider of technology solutions for domestic, commercial, and industrial applications with 15+ years of experience."
    },
    
    products: [
        {
            id: 1,
            name: "Smart Home Hub Pro",
            description: "Central control system for all your smart home devices with voice control and mobile app integration",
            price: 399,
            tier: "domestic",
            imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400",
            specifications: "Works with Alexa, Google, Apple HomeKit. Controls lights, thermostats, security systems.",
            category: "automation"
        },
        {
            id: 2,
            name: "Advanced Security Camera System",
            description: "Professional-grade security system with 4K cameras, night vision, and cloud storage",
            price: 799,
            tier: "domestic",
            imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400",
            specifications: "8 cameras, 2TB storage, mobile alerts, facial recognition",
            category: "security"
        },
        {
            id: 3,
            name: "Enterprise WiFi Solution",
            description: "High-performance wireless network infrastructure for medium to large businesses",
            price: 2499,
            tier: "commercial",
            imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400",
            specifications: "Covers up to 10,000 sq ft, supports 500+ devices, enterprise security",
            category: "networking"
        },
        {
            id: 4,
            name: "Retail Management Suite",
            description: "Complete point-of-sale and inventory management system for retail businesses",
            price: 1899,
            tier: "commercial",
            imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400",
            specifications: "POS terminals, inventory tracking, customer management, reporting dashboard",
            category: "retail"
        },
        {
            id: 5,
            name: "Factory Automation Platform",
            description: "Comprehensive industrial automation system with IoT sensors and real-time monitoring",
            price: 25000,
            tier: "industrial",
            imageUrl: "https://images.unsplash.com/photo-1565843708714-1f55b8b8f5e1?w=400",
            specifications: "SCADA integration, predictive maintenance, production analytics, remote monitoring",
            category: "automation"
        },
        {
            id: 6,
            name: "Industrial IoT Analytics Hub",
            description: "Advanced data analytics platform for manufacturing operations and supply chain optimization",
            price: 35000,
            tier: "industrial",
            imageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
            specifications: "Real-time dashboards, machine learning insights, predictive analytics, API integration",
            category: "analytics"
        }
    ],
    
    users: [
        {
            id: 1,
            username: "admin",
            password: "admin123",
            role: "admin",
            name: "System Administrator",
            email: "admin@techsolutions.com"
        },
        {
            id: 2,
            username: "client",
            password: "client123",
            role: "client",
            name: "Client Manager",
            email: "client@techsolutions.com"
        }
    ],
    
    appointments: [
        {
            id: 1,
            date: "2025-01-07",
            time: "10:00",
            customerName: "Sarah Johnson",
            email: "sarah.johnson@email.com",
            phone: "555-0123",
            serviceType: "Installation Consultation",
            status: "confirmed",
            notes: "Smart home setup for new construction"
        },
        {
            id: 2,
            date: "2025-01-08",
            time: "14:00",
            customerName: "Mark Williams",
            email: "mark.w@company.com",
            phone: "555-0456",
            serviceType: "System Upgrade",
            status: "confirmed",
            notes: "Enterprise network expansion"
        },
        {
            id: 3,
            date: "2025-01-09",
            time: "11:00",
            customerName: "Jennifer Chen",
            email: "j.chen@manufacturing.com",
            phone: "555-0789",
            serviceType: "Site Assessment",
            status: "pending",
            notes: "Industrial automation assessment"
        }
    ],
    
    inquiries: [
        {
            id: 1,
            productId: 1,
            customerName: "David Miller",
            email: "david.miller@email.com",
            phone: "555-1234",
            message: "Interested in smart home integration for 3-bedroom house",
            date: "2025-01-02",
            status: "pending",
            responses: {
                budget: "$2000-$5000",
                timeline: "Within 1 month",
                property_type: "Single family home"
            }
        }
    ],
    
    orders: [
        {
            id: 1,
            productId: 2,
            customerName: "Lisa Anderson",
            email: "lisa.anderson@email.com",
            phone: "555-9876",
            quantity: 1,
            totalAmount: 799,
            status: "processing",
            orderDate: "2025-01-01",
            deliveryAddress: "123 Main St, Cityville, ST 12345"
        }
    ],
    
    questionnaireTemplates: [
        {
            id: 1,
            name: "General Product Inquiry",
            description: "Standard inquiry form for all products",
            questions: [
                {
                    id: 1,
                    type: "text",
                    label: "Full Name",
                    name: "customerName",
                    required: true,
                    order: 1
                },
                {
                    id: 2,
                    type: "email",
                    label: "Email Address",
                    name: "email",
                    required: true,
                    order: 2
                },
                {
                    id: 3,
                    type: "tel",
                    label: "Phone Number",
                    name: "phone",
                    required: true,
                    order: 3
                },
                {
                    id: 4,
                    type: "select",
                    label: "Budget Range",
                    name: "budget",
                    required: true,
                    options: ["Under $1,000", "$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "Over $50,000"],
                    order: 4
                },
                {
                    id: 5,
                    type: "radio",
                    label: "Timeline",
                    name: "timeline",
                    required: true,
                    options: ["Immediately", "Within 1 month", "Within 3 months", "Within 6 months", "Planning phase"],
                    order: 5
                },
                {
                    id: 6,
                    type: "textarea",
                    label: "Additional Requirements",
                    name: "requirements",
                    required: false,
                    order: 6
                }
            ]
        }
    ]
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderProducts();
    renderCalendar();
    updateNavigation();
    updateDashboardStats();
    
    // Set up event listeners
    setupEventListeners();
    
    // Show home section by default
    showSection('home');
}

function setupEventListeners() {
    // Login form
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    
    // Product form
    document.getElementById('product-form').addEventListener('submit', handleProductSave);
    
    // Booking form
    document.getElementById('booking-form').addEventListener('submit', handleBooking);
    
    // Order form
    document.getElementById('order-form').addEventListener('submit', handleOrderSubmission);
    
    // Contact form
    document.getElementById('contact-form').addEventListener('submit', handleContactForm);
    
    // Admin product filter
    document.getElementById('product-tier-filter').addEventListener('change', filterAdminProducts);
    
    // Order quantity change
    document.querySelector('input[name="quantity"]')?.addEventListener('input', updateOrderTotal);
}

// Navigation Functions
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    const navLink = document.querySelector(`[onclick="showSection('${sectionId}')"]`);
    if (navLink) {
        navLink.classList.add('active');
    }
    
    appState.currentSection = sectionId;
    
    // Load section-specific content
    if (sectionId === 'admin-dashboard' && (appState.currentUser?.role === 'admin' || appState.currentUser?.role === 'client')) {
        renderAdminDashboard();
    }
}

function updateNavigation() {
    const adminElements = document.querySelectorAll('.admin-only');
    const logoutBtn = document.querySelector('.logout-btn');
    const loginBtn = document.querySelector('.login-btn');
    
    if (appState.currentUser && (appState.currentUser.role === 'admin' || appState.currentUser.role === 'client')) {
        adminElements.forEach(el => el.classList.add('show-admin'));
        logoutBtn.classList.add('show-admin');
        logoutBtn.classList.remove('hidden');
        loginBtn.classList.add('hidden');
        
        // Show dashboard if admin/client
        showSection('admin-dashboard');
    } else {
        adminElements.forEach(el => el.classList.remove('show-admin'));
        logoutBtn.classList.remove('show-admin');
        logoutBtn.classList.add('hidden');
        loginBtn.classList.remove('hidden');
    }
}

// Authentication Functions
function openLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
    document.getElementById('login-form').reset();
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    
    const user = appState.users.find(u => u.username === username && u.password === password);
    
    if (user) {
        appState.currentUser = user;
        closeLoginModal();
        updateNavigation();
        showSuccessMessage(`Welcome back, ${user.name}!`);
    } else {
        showErrorMessage('Invalid username or password');
    }
}

function logout() {
    appState.currentUser = null;
    updateNavigation();
    showSection('home');
    showSuccessMessage('Logged out successfully!');
}

// Product Management Functions
function renderProducts() {
    const tiers = ['domestic', 'commercial', 'industrial'];
    
    tiers.forEach(tier => {
        const container = document.getElementById(`${tier}-products`);
        if (container) {
            const tierProducts = appState.products.filter(p => p.tier === tier);
            container.innerHTML = tierProducts.map(product => createProductCard(product)).join('');
        }
    });
}

function createProductCard(product) {
    const isAdmin = appState.currentUser?.role === 'admin';
    
    return `
        <div class="product-card" data-category="${product.category}" data-name="${product.name.toLowerCase()}">
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none;">
                ${product.name}
            </div>
            <div class="product-details">
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toLocaleString()}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-specs">${product.specifications}</div>
                <div class="product-actions">
                    <button class="btn btn--primary" onclick="openOrderModal(${product.id}, 'inquiry')">Make Inquiry</button>
                    <button class="btn btn--outline" onclick="openOrderModal(${product.id}, 'order')">Order Now</button>
                    ${isAdmin ? 
                        `<button class="btn btn--secondary admin-only show-admin" onclick="editProduct(${product.id})">Edit</button>
                         <button class="btn btn--outline admin-only show-admin" onclick="deleteProduct(${product.id})">Delete</button>` 
                        : ''
                    }
                </div>
            </div>
        </div>
    `;
}

function filterProducts(tier) {
    const searchInput = document.getElementById(`${tier}-search`);
    const categoryFilter = document.getElementById(`${tier}-filter`);
    const productsContainer = document.getElementById(`${tier}-products`);
    
    if (!searchInput || !categoryFilter || !productsContainer) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    const productCards = productsContainer.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.dataset.name;
        const productCategory = card.dataset.category;
        
        const matchesSearch = productName.includes(searchTerm);
        const matchesCategory = !selectedCategory || productCategory === selectedCategory;
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openProductModal(tier, product = null) {
    const modal = document.getElementById('product-modal');
    const form = document.getElementById('product-form');
    const title = document.getElementById('product-modal-title');
    
    if (product) {
        title.textContent = 'Edit Product';
        form.name.value = product.name;
        form.description.value = product.description;
        form.price.value = product.price;
        form.category.value = product.category;
        form.specifications.value = product.specifications;
        form.imageUrl.value = product.imageUrl || '';
        form.tier.value = product.tier;
        form.id.value = product.id;
    } else {
        title.textContent = 'Add Product';
        form.reset();
        form.tier.value = tier;
        form.id.value = '';
    }
    
    modal.classList.remove('hidden');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

function editProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (product) {
        openProductModal(product.tier, product);
    }
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        appState.products = appState.products.filter(p => p.id !== productId);
        renderProducts();
        renderAdminDashboard();
        updateDashboardStats();
        showSuccessMessage('Product deleted successfully!');
    }
}

function handleProductSave(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const productData = {
        name: formData.get('name'),
        description: formData.get('description'),
        price: parseInt(formData.get('price')),
        category: formData.get('category'),
        specifications: formData.get('specifications'),
        imageUrl: formData.get('imageUrl') || `https://via.placeholder.com/400x200/4CAF50/white?text=${encodeURIComponent(formData.get('name'))}`,
        tier: formData.get('tier')
    };
    
    const productId = formData.get('id');
    
    if (productId) {
        // Edit existing product
        const index = appState.products.findIndex(p => p.id == productId);
        if (index !== -1) {
            appState.products[index] = { ...appState.products[index], ...productData };
        }
    } else {
        // Add new product
        const maxId = Math.max(...appState.products.map(p => p.id), 0);
        productData.id = maxId + 1;
        appState.products.push(productData);
    }
    
    renderProducts();
    renderAdminDashboard();
    updateDashboardStats();
    closeProductModal();
    showSuccessMessage('Product saved successfully!');
}

// Calendar and Appointment Functions
function renderCalendar() {
    const calendar = document.getElementById('calendar');
    const monthYearDisplay = document.getElementById('calendar-month-year');
    
    if (!calendar || !monthYearDisplay) return;
    
    const year = appState.currentYear;
    const month = appState.currentMonth;
    
    // Update month/year display
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar
    calendar.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        calendar.appendChild(dayElement);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(document.createElement('div'));
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateElement = document.createElement('div');
        dateElement.className = 'calendar-date';
        dateElement.textContent = day;
        
        const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const cellDate = new Date(year, month, day);
        
        // Mark today
        if (cellDate.toDateString() === today.toDateString()) {
            dateElement.classList.add('today');
        }
        
        // Disable past dates
        if (cellDate < today.setHours(0, 0, 0, 0)) {
            dateElement.classList.add('disabled');
        } else {
            dateElement.onclick = () => selectDate(dateString);
        }
        
        calendar.appendChild(dateElement);
    }
}

function changeMonth(direction) {
    appState.currentMonth += direction;
    
    if (appState.currentMonth > 11) {
        appState.currentMonth = 0;
        appState.currentYear++;
    } else if (appState.currentMonth < 0) {
        appState.currentMonth = 11;
        appState.currentYear--;
    }
    
    renderCalendar();
}

function selectDate(dateString) {
    // Remove previous selection
    document.querySelectorAll('.calendar-date.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Select new date
    event.target.classList.add('selected');
    appState.selectedDate = dateString;
    
    // Show time slots
    renderTimeSlots(dateString);
}

function renderTimeSlots(date) {
    const timeSlotsContainer = document.getElementById('time-slots');
    if (!timeSlotsContainer) return;
    
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    
    timeSlotsContainer.innerHTML = '';
    
    timeSlots.forEach(time => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = time;
        
        // Check if slot is already booked
        const isBooked = appState.appointments.some(apt => apt.date === date && apt.time === time);
        
        if (isBooked) {
            slotElement.classList.add('booked');
            slotElement.textContent += ' (Booked)';
        } else {
            slotElement.onclick = () => selectTimeSlot(time);
        }
        
        timeSlotsContainer.appendChild(slotElement);
    });
    
    timeSlotsContainer.classList.remove('hidden');
}

function selectTimeSlot(time) {
    // Remove previous selection
    document.querySelectorAll('.time-slot.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Select new time
    event.target.classList.add('selected');
    appState.selectedTime = time;
    
    // Update display and show form
    const displayDate = new Date(appState.selectedDate).toLocaleDateString();
    document.getElementById('selected-slot-display').textContent = `${displayDate} at ${time}`;
    document.getElementById('booking-form').classList.remove('hidden');
}

function handleBooking(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const booking = {
        id: Math.max(...appState.appointments.map(a => a.id), 0) + 1,
        date: appState.selectedDate,
        time: appState.selectedTime,
        customerName: formData.get('customerName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        serviceType: formData.get('serviceType'),
        status: 'confirmed',
        notes: formData.get('notes') || ''
    };
    
    appState.appointments.push(booking);
    
    // Reset form and selections
    event.target.reset();
    document.getElementById('booking-form').classList.add('hidden');
    document.getElementById('time-slots').classList.add('hidden');
    document.querySelectorAll('.calendar-date.selected, .time-slot.selected').forEach(el => {
        el.classList.remove('selected');
    });
    
    appState.selectedDate = null;
    appState.selectedTime = null;
    
    updateDashboardStats();
    showSuccessMessage('Appointment booked successfully! You will receive a confirmation email shortly.');
}

// Order and Inquiry Functions
function openOrderModal(productId, tab = 'inquiry') {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('order-modal');
    const form = document.getElementById('order-form');
    const title = document.getElementById('order-modal-title');
    const customFields = document.getElementById('custom-fields');
    
    title.textContent = `${product.name}`;
    form.productId.value = productId;
    form.productName.value = product.name;
    form.productPrice.value = product.price;
    
    // Update order summary
    document.getElementById('order-product-name').textContent = product.name;
    document.getElementById('order-unit-price').textContent = `$${product.price.toLocaleString()}`;
    updateOrderTotal();
    
    // Load custom fields for inquiry
    if (tab === 'inquiry') {
        const template = appState.questionnaireTemplates[0];
        if (template) {
            customFields.innerHTML = template.questions
                .sort((a, b) => a.order - b.order)
                .map(field => createCustomField(field)).join('');
        }
    }
    
    showOrderTab(tab);
    modal.classList.remove('hidden');
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.add('hidden');
    document.getElementById('order-form').reset();
}

function showOrderTab(tabName) {
    appState.currentOrderTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.order-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event?.target?.classList.add('active') || 
        document.querySelector(`.order-tab-btn[onclick="showOrderTab('${tabName}')"]`)?.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.order-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
    
    // Update submit button text
    const submitBtn = document.getElementById('order-submit-btn');
    submitBtn.textContent = tabName === 'inquiry' ? 'Submit Inquiry' : 'Place Order';
}

function updateOrderTotal() {
    const quantityInput = document.querySelector('input[name="quantity"]');
    const priceInput = document.querySelector('input[name="productPrice"]');
    const totalDisplay = document.getElementById('order-total-amount');
    
    if (quantityInput && priceInput && totalDisplay) {
        const quantity = parseInt(quantityInput.value) || 1;
        const price = parseInt(priceInput.value) || 0;
        const total = quantity * price;
        totalDisplay.textContent = `$${total.toLocaleString()}`;
    }
}

function createCustomField(field) {
    let input = '';
    
    switch (field.type) {
        case 'select':
            const options = field.options.map(option => 
                `<option value="${option}">${option}</option>`).join('');
            input = `<select class="form-control" name="${field.name}" ${field.required ? 'required' : ''}>
                        <option value="">Select an option</option>${options}
                    </select>`;
            break;
        case 'radio':
            input = field.options.map(option => 
                `<label class="radio-option">
                    <input type="radio" name="${field.name}" value="${option}" ${field.required ? 'required' : ''}> ${option}
                </label>`).join('');
            break;
        case 'textarea':
            input = `<textarea class="form-control" name="${field.name}" rows="3" ${field.required ? 'required' : ''}></textarea>`;
            break;
        case 'email':
            input = `<input type="email" class="form-control" name="${field.name}" ${field.required ? 'required' : ''}>`;
            break;
        case 'tel':
            input = `<input type="tel" class="form-control" name="${field.name}" ${field.required ? 'required' : ''}>`;
            break;
        default:
            input = `<input type="text" class="form-control" name="${field.name}" ${field.required ? 'required' : ''}>`;
    }
    
    return `
        <div class="form-group">
            <label class="form-label">${field.label} ${field.required ? '*' : ''}</label>
            ${input}
        </div>
    `;
}

function handleOrderSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    if (appState.currentOrderTab === 'inquiry') {
        // Handle inquiry submission
        const inquiry = {
            id: Math.max(...appState.inquiries.map(i => i.id), 0) + 1,
            productId: parseInt(formData.get('productId')),
            customerName: formData.get('customerName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
            date: new Date().toISOString().split('T')[0],
            status: 'pending',
            responses: {}
        };
        
        // Collect custom field responses
        const template = appState.questionnaireTemplates[0];
        if (template) {
            template.questions.forEach(field => {
                const value = formData.get(field.name);
                if (value) {
                    inquiry.responses[field.name] = value;
                }
            });
        }
        
        appState.inquiries.push(inquiry);
        showSuccessMessage('Inquiry submitted successfully! We will contact you within 24 hours.');
        
    } else {
        // Handle order submission
        const order = {
            id: Math.max(...appState.orders.map(o => o.id), 0) + 1,
            productId: parseInt(formData.get('productId')),
            customerName: formData.get('orderCustomerName'),
            email: formData.get('orderEmail'),
            phone: formData.get('orderPhone'),
            quantity: parseInt(formData.get('quantity')),
            totalAmount: parseInt(formData.get('quantity')) * parseInt(formData.get('productPrice')),
            status: 'processing',
            orderDate: new Date().toISOString().split('T')[0],
            deliveryAddress: formData.get('deliveryAddress')
        };
        
        appState.orders.push(order);
        showSuccessMessage('Order placed successfully! You will receive a confirmation email with tracking details.');
    }
    
    closeOrderModal();
    updateDashboardStats();
}

// Contact Form
function handleContactForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Simulate form submission
    showSuccessMessage('Thank you for your message! We will get back to you within 24 hours.');
    event.target.reset();
}

// Admin Dashboard Functions
function showAdminTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(`admin-${tabName}`).classList.add('active');
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Render tab content
    switch (tabName) {
        case 'products':
            renderAdminProducts();
            break;
        case 'appointments':
            renderAdminAppointments();
            break;
        case 'inquiries':
            renderAdminInquiries();
            break;
        case 'orders':
            renderAdminOrders();
            break;
        case 'questionnaires':
            renderAdminQuestionnaires();
            break;
    }
}

function renderAdminDashboard() {
    renderAdminProducts();
    renderAdminAppointments();
    renderAdminInquiries();
    renderAdminOrders();
    renderAdminQuestionnaires();
}

function updateDashboardStats() {
    const totalProducts = appState.products.length;
    const totalAppointments = appState.appointments.length;
    const totalInquiries = appState.inquiries.length;
    const totalOrders = appState.orders.length;
    
    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('total-appointments').textContent = totalAppointments;
    document.getElementById('total-inquiries').textContent = totalInquiries;
    document.getElementById('total-orders').textContent = totalOrders;
}

function renderAdminProducts() {
    const container = document.getElementById('admin-products-list');
    if (!container) return;
    
    const filter = document.getElementById('product-tier-filter').value;
    let products = appState.products;
    
    if (filter) {
        products = products.filter(p => p.tier === filter);
    }
    
    container.innerHTML = products.map(product => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${product.name} (${product.tier})</h4>
                <p>${product.description}</p>
                <p><strong>Price:</strong> $${product.price.toLocaleString()}</p>
                <p><strong>Category:</strong> ${product.category}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn btn--sm btn--secondary" onclick="editProduct(${product.id})">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function renderAdminAppointments() {
    const container = document.getElementById('admin-appointments-list');
    if (!container) return;
    
    container.innerHTML = appState.appointments.map(appointment => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${appointment.customerName}</h4>
                <p><strong>Date:</strong> ${appointment.date} at ${appointment.time}</p>
                <p><strong>Service:</strong> ${appointment.serviceType}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Status:</strong> <span class="status status--${appointment.status === 'confirmed' ? 'success' : 'warning'}">${appointment.status}</span></p>
                ${appointment.notes ? `<p><strong>Notes:</strong> ${appointment.notes}</p>` : ''}
            </div>
            <div class="admin-item-actions">
                <button class="btn btn--sm btn--outline" onclick="cancelAppointment(${appointment.id})">Cancel</button>
            </div>
        </div>
    `).join('');
}

function renderAdminInquiries() {
    const container = document.getElementById('admin-inquiries-list');
    if (!container) return;
    
    container.innerHTML = appState.inquiries.map(inquiry => {
        const product = appState.products.find(p => p.id === inquiry.productId);
        return `
            <div class="admin-item">
                <div class="admin-item-info">
                    <h4>${inquiry.customerName} - ${product?.name || 'Unknown Product'}</h4>
                    <p><strong>Email:</strong> ${inquiry.email}</p>
                    <p><strong>Phone:</strong> ${inquiry.phone}</p>
                    <p><strong>Message:</strong> ${inquiry.message}</p>
                    <p><strong>Date:</strong> ${inquiry.date}</p>
                    ${Object.keys(inquiry.responses || {}).map(key => 
                        `<p><strong>${key}:</strong> ${inquiry.responses[key]}</p>`
                    ).join('')}
                    <p><strong>Status:</strong> <span class="status status--${inquiry.status === 'pending' ? 'warning' : 'success'}">${inquiry.status}</span></p>
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn--sm btn--secondary" onclick="respondToInquiry(${inquiry.id})">Respond</button>
                    <button class="btn btn--sm btn--outline" onclick="deleteInquiry(${inquiry.id})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    if (!container) return;
    
    container.innerHTML = appState.orders.map(order => {
        const product = appState.products.find(p => p.id === order.productId);
        return `
            <div class="admin-item">
                <div class="admin-item-info">
                    <h4>Order #${order.id} - ${order.customerName}</h4>
                    <p><strong>Product:</strong> ${product?.name || 'Unknown Product'}</p>
                    <p><strong>Quantity:</strong> ${order.quantity}</p>
                    <p><strong>Total:</strong> $${order.totalAmount.toLocaleString()}</p>
                    <p><strong>Email:</strong> ${order.email}</p>
                    <p><strong>Phone:</strong> ${order.phone}</p>
                    <p><strong>Order Date:</strong> ${order.orderDate}</p>
                    <p><strong>Status:</strong> <span class="status status--${order.status === 'processing' ? 'warning' : 'success'}">${order.status}</span></p>
                    <p><strong>Delivery Address:</strong> ${order.deliveryAddress}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn--sm btn--secondary" onclick="updateOrderStatus(${order.id})">Update Status</button>
                    <button class="btn btn--sm btn--outline" onclick="deleteOrder(${order.id})">Delete</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderAdminQuestionnaires() {
    const container = document.getElementById('admin-questionnaires-list');
    if (!container) return;
    
    container.innerHTML = appState.questionnaireTemplates.map(template => `
        <div class="admin-item">
            <div class="admin-item-info">
                <h4>${template.name}</h4>
                <p>${template.description}</p>
                <p><strong>Fields:</strong> ${template.questions.length}</p>
            </div>
            <div class="admin-item-actions">
                <button class="btn btn--sm btn--secondary" onclick="editQuestionnaire(${template.id})">Edit</button>
                <button class="btn btn--sm btn--outline" onclick="deleteQuestionnaire(${template.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function filterAdminProducts() {
    renderAdminProducts();
}

function cancelAppointment(appointmentId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        appState.appointments = appState.appointments.filter(apt => apt.id !== appointmentId);
        renderAdminAppointments();
        updateDashboardStats();
        if (appState.selectedDate) {
            renderTimeSlots(appState.selectedDate);
        }
        showSuccessMessage('Appointment cancelled successfully!');
    }
}

function deleteInquiry(inquiryId) {
    if (confirm('Are you sure you want to delete this inquiry?')) {
        appState.inquiries = appState.inquiries.filter(inq => inq.id !== inquiryId);
        renderAdminInquiries();
        updateDashboardStats();
        showSuccessMessage('Inquiry deleted successfully!');
    }
}

function deleteOrder(orderId) {
    if (confirm('Are you sure you want to delete this order?')) {
        appState.orders = appState.orders.filter(ord => ord.id !== orderId);
        renderAdminOrders();
        updateDashboardStats();
        showSuccessMessage('Order deleted successfully!');
    }
}

function respondToInquiry(inquiryId) {
    const inquiry = appState.inquiries.find(inq => inq.id === inquiryId);
    if (inquiry) {
        alert(`Email client would open to respond to: ${inquiry.email}\n\nThis feature would integrate with your email system.`);
    }
}

function updateOrderStatus(orderId) {
    const order = appState.orders.find(ord => ord.id === orderId);
    if (order) {
        const newStatus = prompt('Enter new status:', order.status);
        if (newStatus && newStatus !== order.status) {
            order.status = newStatus;
            renderAdminOrders();
            showSuccessMessage('Order status updated successfully!');
        }
    }
}

function openQuestionnaireModal() {
    alert('Questionnaire builder feature would open here. This would allow creating custom forms with drag-and-drop fields.');
}

function editQuestionnaire(templateId) {
    alert('Questionnaire editor would open here for template ID: ' + templateId);
}

function deleteQuestionnaire(templateId) {
    if (confirm('Are you sure you want to delete this questionnaire template?')) {
        appState.questionnaireTemplates = appState.questionnaireTemplates.filter(t => t.id !== templateId);
        renderAdminQuestionnaires();
        showSuccessMessage('Questionnaire template deleted successfully!');
    }
}

// Utility Functions
function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${type}-message`;
    messageDiv.textContent = message;
    
    // Insert at top of current section
    const currentSection = document.querySelector('.section.active .container');
    if (currentSection) {
        currentSection.insertBefore(messageDiv, currentSection.firstChild);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 5000);
    }
}