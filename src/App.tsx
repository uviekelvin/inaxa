import React, { useState, useEffect } from "react";
import {
	ArrowRight,
	Code,
	Database,
	Cloud,
	Smartphone,
	TrendingUp,
	Package,
	Building2,
	ShoppingCart,
	DollarSign,
	Check,
	Menu,
	X,
	ChevronRight,
	Zap,
	Shield,
	Globe,
} from "lucide-react";

export default function InaxaWebsite() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);

			// Update active section based on scroll position
			const sections = [
				"home",
				"about",
				"services",
				"industries",
				"case-studies",
				"technology",
				"contact",
			];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) setActiveSection(current);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setMobileMenuOpen(false);
		}
	};

	const industries = [
		{
			name: "Fintech",
			icon: DollarSign,
			desc: "Secure payment platforms and financial solutions",
		},
		{
			name: "E-commerce & Logistics",
			icon: ShoppingCart,
			desc: "Multi-vendor marketplaces and delivery systems",
		},
		{
			name: "Real Estate & Hospitality",
			icon: Building2,
			desc: "Property and booking management systems",
		},
		{
			name: "Investment & Stock",
			icon: TrendingUp,
			desc: "Portfolio management and analytics",
		},
		{
			name: "Legal Technology",
			icon: Shield,
			desc: "Case management and legal workflow solutions",
		},
		{
			name: "Healthcare & Medical",
			icon: Package,
			desc: "Patient management and healthcare platforms",
		},
	];

	const services = [
		{
			title: "Product Strategy & System Design",
			description:
				"Transform ideas into scalable technical architectures with strategic planning and design thinking.",
			icon: Globe,
		},
		{
			title: "SaaS Platform Development",
			description:
				"Build robust, multi-tenant platforms designed for growth and operational efficiency.",
			icon: Cloud,
		},
		{
			title: "Web & Mobile Applications",
			description:
				"Create responsive, high-performance applications across all platforms.",
			icon: Smartphone,
		},
		{
			title: "Fintech & Payment Systems",
			description:
				"Develop secure, compliant financial platforms with seamless transaction processing.",
			icon: Shield,
		},
		{
			title: "Cloud Infrastructure & DevOps",
			description:
				"Deploy scalable, reliable infrastructure with automated CI/CD pipelines.",
			icon: Database,
		},
		{
			title: "API & Microservices",
			description:
				"Design modular, maintainable systems with modern architecture patterns.",
			icon: Code,
		},
	];

	const caseStudies = [
		{
			title: "Noddit: Mobile Banking & Digital Wallet",
			industry: "Fintech",
			type: "Mobile Banking Platform",
			problem:
				"Nigerian consumers needed a modern, accessible mobile banking solution that could handle account creation, fund transfers, bill payments, and airtime purchases without requiring branch visits. The platform needed to support biometric authentication, seamless integration with existing banking infrastructure, and provide a user-friendly experience for customers with varying levels of digital literacy.",
			solution:
				'Inaxa built Noddit, a comprehensive mobile banking application featuring selfie-based account verification, biometric login (facial recognition and fingerprint), secure fund transfers, utility bill payments, airtime and data purchases, cross-bank withdrawals, real-time transaction reporting, and dark/light mode interface customization. The platform includes a three-tap "springboard" feature for quick transactions and supports account tier upgrades without branch visits.',
			results: [
				"Launched on both iOS and Android with 5-star user experience",
				"Enabled instant account opening with selfie verification",
				"Processed thousands of secure daily transactions",
				"Reduced transaction time to just three taps for common operations",
				"Seamless integration with Nigerian banking infrastructure",
			],
			color: "from-blue-500 to-cyan-500",
			link: "https://getnoddit.com",
		},
		{
			title: "Noddit Shop: Multi-Store E-commerce & Delivery Platform",
			industry: "E-commerce & Logistics",
			type: "Multi-Vendor Marketplace",
			problem:
				"Local businesses in Warri, Nigeria needed a unified platform to reach customers digitally. Consumers wanted to shop from multiple stores, order food, and access on-demand services through a single app. The challenge was creating a scalable multi-vendor system that could handle diverse product categories (fashion, electronics, food) while providing real-time delivery tracking and efficient logistics management.",
			solution:
				"Inaxa developed Noddit Shop, a comprehensive multi-store e-commerce and delivery platform that combines marketplace functionality with food delivery and on-demand services. The platform features personalized store discovery based on proximity, vendor management tools, integrated payment processing, real-time order tracking, delivery logistics coordination, and a unified customer experience across product categories.",
			results: [
				"Successfully onboarded multiple local vendors in Warri",
				"Created unified shopping experience across fashion, electronics, and food",
				"Enabled real-time delivery tracking for all orders",
				"Improved local business digital presence and sales",
				"Built scalable infrastructure ready for multi-city expansion",
			],
			color: "from-emerald-500 to-teal-500",
			link: "https://shop.getnoddit.com",
		},
		{
			title: "Real-Time Delivery & Dispatch System",
			industry: "Logistics",
			type: "Web & Mobile Platform",
			problem:
				"Logistics companies needed a comprehensive solution to track deliveries in real time, assign riders dynamically, monitor delivery performance, and improve customer visibility throughout the delivery process.",
			solution:
				"Inaxa developed a complete logistics management system including a rider mobile application with GPS tracking, real-time dispatch dashboard for operations management, automated rider assignment algorithms, delivery status updates with customer notifications, and performance analytics for route optimization.",
			results: [
				"Reduced delivery delays by 40%",
				"Increased delivery completion rate to 95%+",
				"Improved customer satisfaction through real-time tracking",
				"Better operational visibility and data-driven decision making",
			],
			color: "from-orange-500 to-amber-500",
		},
		{
			title: "Legal Case Management System",
			industry: "Legal Technology",
			type: "SaaS Management Platform",
			problem:
				"Law firms needed to modernize their case management processes, moving from paper-based systems to digital workflows. The platform needed to handle document management, case tracking, client communication, deadline management, and billing while maintaining strict confidentiality and compliance standards.",
			solution:
				"Inaxa built a comprehensive legal case management platform featuring secure document storage and management, case timeline and milestone tracking, client portal for communication, automated deadline reminders and calendar management, time tracking and billing integration, and role-based access controls for confidentiality.",
			results: [
				"Reduced case processing time by 35%",
				"Improved document retrieval efficiency",
				"Enhanced client communication and transparency",
				"Streamlined billing and time tracking processes",
			],
			color: "from-purple-500 to-pink-500",
		},
		{
			title: "Healthcare Patient Management Platform",
			industry: "Healthcare & Medical",
			type: "Medical SaaS System",
			problem:
				"Healthcare facilities struggled with fragmented patient records, scheduling inefficiencies, and limited patient engagement. They needed a unified platform to manage appointments, medical records, prescriptions, and patient communications while ensuring HIPAA compliance and data security.",
			solution:
				"Inaxa developed a comprehensive healthcare management system with electronic health records (EHR) integration, online appointment scheduling with automated reminders, prescription management and e-prescribing, patient portal for access to medical records, telemedicine capabilities, and secure messaging between patients and providers.",
			results: [
				"Reduced appointment no-shows by 50%",
				"Improved patient record accessibility for healthcare providers",
				"Enhanced patient engagement through digital access",
				"Ensured full compliance with healthcare data regulations",
			],
			color: "from-indigo-500 to-blue-500",
		},
		{
			title: "Property & Booking Management Platform",
			industry: "Real Estate & Hospitality",
			type: "SaaS Management System",
			problem:
				"Property managers and hospitality businesses faced inefficiencies managing bookings, properties, and guests manually, leading to double bookings, revenue loss, and poor guest experiences.",
			solution:
				"Inaxa built a comprehensive platform with property listing management, booking and reservation system with calendar synchronization, guest management with profile history, integrated payment processing, automated communication workflows, and detailed reporting and revenue analytics.",
			results: [
				"Eliminated double bookings through centralized management",
				"Increased booking efficiency by 60%",
				"Reduced operational errors and improved guest satisfaction",
				"Provided actionable insights through analytics dashboard",
			],
			color: "from-rose-500 to-pink-500",
		},
	];

	const techStack = [
		"Cloud-native architecture",
		"Microservices & APIs",
		"Web & mobile frameworks",
		"Secure databases",
		"DevOps & CI/CD pipelines",
	];

	const teamMembers = [
		{
			name: "Uvie Oghenejakpor",
			position: "Chief Executive Officer",
			description:
				"Visionary technology leader driving digital transformation across the financial services sector. Under his leadership, Inaxa has built innovative platforms that have generated over 50% revenue growth and accelerated customer acquisition for major financial institutions including Wema Bank (Alat for Business) and Polaris Bank (Vulte). With deep expertise in software architecture and product strategy, Uvie leads Inaxa's mission to build scalable SaaS solutions that empower businesses across multiple industries. His strategic approach combines technical excellence with business acumen, positioning Inaxa as a trusted partner for companies seeking digital innovation.",
			image: "/images/uvie.jpg", // Replace with actual image path
		},
		{
			name: "Cornelius Igboanugwo",
			position: "Chief Technology Officer",
			description:
				"Technology visionary architecting the future of enterprise software at Inaxa. With over 9 years of leadership experience, Cornelius drives technical innovation and engineering excellence across banking, fintech, and healthcare platforms. As CTO, he defines Inaxa's technology strategy, champions microservices architecture and cloud-native solutions, and builds high-performing engineering teams that deliver at scale. His technical leadership ensures robust security protocols, optimal system performance, and sustainable architectural decisions. Cornelius has successfully led distributed teams across multiple continents, fostering a culture of innovation while maintaining enterprise-grade reliability and security standards.",
			image: "/images/kachi.jpg", // Replace with actual image path
		},
	];

	return (
		<div
			className='min-h-screen bg-slate-950 text-slate-100'
			style={{ fontFamily: "'Inter', sans-serif" }}
		>
			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? "bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
						: "bg-transparent"
				}`}
			>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						<div
							className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							INAXA
						</div>

						{/* Desktop Navigation */}
						<div className='hidden md:flex items-center gap-8'>
							{[
								"Home",
								"About",
								"Services",
								"Industries",
								"Case Studies",
								"Technology",
								"Team",
								"Contact",
							].map((item) => (
								<button
									key={item}
									onClick={() =>
										scrollToSection(item.toLowerCase().replace(" ", "-"))
									}
									className={`text-sm transition-colors ${
										activeSection === item.toLowerCase().replace(" ", "-")
											? "text-blue-400"
											: "text-slate-300 hover:text-blue-400"
									}`}
								>
									{item}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className='md:hidden text-slate-300 hover:text-blue-400'
						>
							{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Menu */}
					{mobileMenuOpen && (
						<div className='md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 py-4 px-6'>
							{[
								"Home",
								"About",
								"Services",
								"Industries",
								"Case Studies",
								"Technology",
								"Team",
								"Contact",
							].map((item) => (
								<button
									key={item}
									onClick={() =>
										scrollToSection(item.toLowerCase().replace(" ", "-"))
									}
									className='block w-full text-left py-3 text-slate-300 hover:text-blue-400'
								>
									{item}
								</button>
							))}
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section
				id='home'
				className='relative min-h-screen flex items-center overflow-hidden'
			>
				{/* Animated Background */}
				<div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950'></div>
				<div className='absolute inset-0 opacity-20'>
					<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse'></div>
					<div
						className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse'
						style={{ animationDelay: "1s" }}
					></div>
				</div>

				<div className='relative max-w-7xl mx-auto px-6 py-32'>
					<div className='max-w-4xl'>
						<div className='inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm backdrop-blur-sm'>
							Multi-Industry SaaS Expertise
						</div>

						<h1
							className='text-5xl md:text-7xl font-bold mb-6 leading-tight'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Building Scalable{" "}
							<span className='bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient'>
								SaaS Products
							</span>{" "}
							Across Multiple Industries
						</h1>

						<p className='text-xl text-slate-300 mb-12 leading-relaxed'>
							We design and build secure, high-performance software platforms
							for fintech, e-commerce, real estate, logistics, legal, and
							healthcare businesses.
						</p>

						<div className='flex flex-wrap gap-4'>
							<button
								onClick={() => scrollToSection("contact")}
								className='group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2'
							>
								Start a Project
								<ArrowRight
									className='group-hover:translate-x-1 transition-transform'
									size={20}
								/>
							</button>
							<button
								onClick={() => scrollToSection("case-studies")}
								className='px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-100 font-semibold rounded-lg hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300'
							>
								View Case Studies
							</button>
						</div>

						{/* Key Stats */}
						<div className='grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800'>
							{[
								{ label: "Products Built", value: "10+" },
								{ label: "Industries", value: "6+" },
								{ label: "Years Experience", value: "5+" },
							].map((stat, index) => (
								<div key={index} className='text-center md:text-left'>
									<div
										className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2'
										style={{ fontFamily: "'Montserrat', sans-serif" }}
									>
										{stat.value}
									</div>
									<div className='text-slate-400 text-sm'>{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Industries Section */}
			<section id='industries' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
							Industries We Serve
						</div>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Powering Innovation Across{" "}
							<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
								Multiple Sectors
							</span>
						</h2>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{industries.map((industry, index) => {
							const Icon = industry.icon;
							return (
								<div
									key={index}
									className='group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer'
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className='w-14 h-14 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
										<Icon className='text-white' size={28} />
									</div>
									<h3 className='text-xl font-bold mb-3 text-slate-100'>
										{industry.name}
									</h3>
									<p className='text-slate-400 leading-relaxed'>
										{industry.desc}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* How We Work */}
			<section className='py-32 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-cyan-950/20'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							How We Work
						</h2>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							A proven methodology that transforms ideas into scalable products
						</p>
					</div>

					<div className='grid md:grid-cols-4 gap-8'>
						{[
							{
								step: "01",
								title: "Discover",
								desc: "Deep dive into your business needs and technical requirements",
								icon: Globe,
							},
							{
								step: "02",
								title: "Design",
								desc: "Create scalable architecture and user-centric interfaces",
								icon: Code,
							},
							{
								step: "03",
								title: "Build",
								desc: "Develop robust, secure, and high-performance solutions",
								icon: Zap,
							},
							{
								step: "04",
								title: "Scale",
								desc: "Deploy, monitor, and optimize for growth",
								icon: TrendingUp,
							},
						].map((phase, index) => {
							const Icon = phase.icon;
							return (
								<div key={index} className='relative'>
									<div
										className='text-6xl font-bold text-blue-500/10 mb-4'
										style={{ fontFamily: "'Montserrat', sans-serif" }}
									>
										{phase.step}
									</div>
									<div className='w-12 h-12 mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
										<Icon className='text-white' size={24} />
									</div>
									<h3 className='text-2xl font-bold mb-3 text-slate-100'>
										{phase.title}
									</h3>
									<p className='text-slate-400 leading-relaxed'>{phase.desc}</p>
									{index < 3 && (
										<ChevronRight
											className='hidden md:block absolute top-12 -right-4 text-blue-500/30'
											size={24}
										/>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='grid md:grid-cols-2 gap-16 items-center'>
						<div>
							<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
								About Inaxa
							</div>
							<h2
								className='text-4xl md:text-5xl font-bold mb-6'
								style={{ fontFamily: "'Montserrat', sans-serif" }}
							>
								Who We Are
							</h2>
							<p className='text-lg text-slate-300 leading-relaxed mb-6'>
								Inaxa is a software development company focused on building
								scalable SaaS platforms and digital infrastructure for modern
								businesses.
							</p>
							<p className='text-lg text-slate-300 leading-relaxed mb-8'>
								We partner with ambitious companies to transform their ideas
								into production-ready platforms that drive growth and
								operational excellence.
							</p>

							<div className='space-y-4'>
								{[
									"Product-first mindset",
									"Strong engineering culture",
									"Scalable system architecture",
									"Long-term partnership approach",
								].map((item, index) => (
									<div key={index} className='flex items-center gap-3'>
										<div className='w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0'>
											<Check size={14} className='text-white' />
										</div>
										<span className='text-slate-200'>{item}</span>
									</div>
								))}
							</div>
						</div>

						<div className='relative'>
							<div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl'></div>
							<div className='relative p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl'>
								<div className='grid grid-cols-2 gap-6'>
									{[
										{ icon: Shield, label: "Secure & Compliant" },
										{ icon: Zap, label: "High Performance" },
										{ icon: Cloud, label: "Cloud Native" },
										{ icon: Code, label: "Clean Code" },
									].map((item, index) => {
										const Icon = item.icon;
										return (
											<div
												key={index}
												className='p-6 bg-slate-900/50 rounded-2xl text-center'
											>
												<div className='w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center'>
													<Icon className='text-white' size={24} />
												</div>
												<div className='text-sm text-slate-300 font-medium'>
													{item.label}
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id='services' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/10 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
							Our Services
						</div>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Comprehensive{" "}
							<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
								Development Services
							</span>
						</h2>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							End-to-end solutions from concept to deployment and beyond
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
						{services.map((service, index) => {
							const Icon = service.icon;
							return (
								<div
									key={index}
									className='group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300'
								>
									<div className='w-14 h-14 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
										<Icon className='text-white' size={28} />
									</div>
									<h3 className='text-xl font-bold mb-3 text-slate-100'>
										{service.title}
									</h3>
									<p className='text-slate-400 leading-relaxed'>
										{service.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Case Studies Section */}
			<section id='case-studies' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
							Case Studies
						</div>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Real Products.{" "}
							<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
								Real Impact.
							</span>
						</h2>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							We partner with businesses to design, build, and scale technology
							platforms that solve real problems and drive growth.
						</p>
					</div>

					<div className='space-y-12'>
						{caseStudies.map((study, index) => (
							<div
								key={index}
								className='group p-8 md:p-12 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl hover:border-blue-500/30 transition-all duration-300'
							>
								<div className='grid md:grid-cols-3 gap-8'>
									<div className='md:col-span-1'>
										<div
											className={`inline-block px-4 py-2 bg-gradient-to-r ${study.color} rounded-full text-white text-sm font-semibold mb-4`}
										>
											{study.industry}
										</div>
										<h3
											className='text-2xl md:text-3xl font-bold mb-3 text-slate-100'
											style={{ fontFamily: "'Montserrat', sans-serif" }}
										>
											{study.title}
										</h3>
										<p className='text-blue-400 font-medium mb-4'>
											{study.type}
										</p>
										{study.link && (
											<a
												href={study.link}
												target='_blank'
												rel='noopener noreferrer'
												className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 text-sm'
											>
												<Globe size={16} />
												View Live Product
												<ArrowRight size={16} />
											</a>
										)}
									</div>

									<div className='md:col-span-2 space-y-6'>
										<div>
											<h4 className='text-lg font-bold text-slate-200 mb-2'>
												Problem
											</h4>
											<p className='text-slate-400 leading-relaxed'>
												{study.problem}
											</p>
										</div>

										<div>
											<h4 className='text-lg font-bold text-slate-200 mb-2'>
												Solution
											</h4>
											<p className='text-slate-400 leading-relaxed'>
												{study.solution}
											</p>
										</div>

										<div>
											<h4 className='text-lg font-bold text-slate-200 mb-3'>
												Results
											</h4>
											<div className='grid md:grid-cols-2 gap-3'>
												{study.results.map((result, idx) => (
													<div key={idx} className='flex items-start gap-3'>
														<div className='w-5 h-5 mt-0.5 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0'>
															<Check size={12} className='text-white' />
														</div>
														<span className='text-slate-300 text-sm'>
															{result}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Technology Section */}
			<section id='technology' className='py-32 relative overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-cyan-950/20'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
							Technology Stack
						</div>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Modern Technology,{" "}
							<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
								Proven Results
							</span>
						</h2>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							We leverage cutting-edge technologies to build robust, scalable
							solutions
						</p>
					</div>

					<div className='max-w-4xl mx-auto'>
						<div className='grid md:grid-cols-2 gap-6'>
							{techStack.map((tech, index) => (
								<div
									key={index}
									className='group p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 flex items-center gap-4'
								>
									<div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300'>
										<Check className='text-white' size={20} />
									</div>
									<span className='text-lg text-slate-200 font-medium'>
										{tech}
									</span>
								</div>
							))}
						</div>

						<div className='mt-12 p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl backdrop-blur-sm'>
							<div className='grid md:grid-cols-3 gap-8 text-center'>
								{[
									{
										icon: Shield,
										label: "Security First",
										desc: "Enterprise-grade security",
									},
									{
										icon: Zap,
										label: "Optimized Performance",
										desc: "Lightning-fast systems",
									},
									{
										icon: Cloud,
										label: "Scalable Infrastructure",
										desc: "Grow without limits",
									},
								].map((feature, index) => {
									const Icon = feature.icon;
									return (
										<div key={index}>
											<div className='w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center'>
												<Icon className='text-white' size={28} />
											</div>
											<h3 className='text-lg font-bold mb-2 text-slate-100'>
												{feature.label}
											</h3>
											<p className='text-sm text-slate-400'>{feature.desc}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section id='team' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<div className='inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm'>
							Our Team
						</div>
						<h2
							className='text-4xl md:text-5xl font-bold mb-6'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							Meet the{" "}
							<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
								Leadership Team
							</span>
						</h2>
						<p className='text-xl text-slate-300 max-w-3xl mx-auto'>
							Experienced leaders driving innovation and excellence in software
							development
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
						{teamMembers.map((member, index) => (
							<div
								key={index}
								className='group p-8 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-3xl hover:border-blue-500/30 transition-all duration-300'
							>
								<div className='flex flex-col items-center text-center mb-6'>
									<div className='w-32 h-32 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center'>
										<img
											src={member.image}
											alt={member.name}
											className='w-full h-full object-cover'
											onError={(e) => {
												// Fallback to initials if image fails to load
												e.target.style.display = "none";
												e.target.nextSibling.style.display = "flex";
											}}
										/>
										<div className='hidden w-full h-full items-center justify-center text-white text-3xl font-bold'>
											{member.name
												.split(" ")
												.map((n) => n[0])
												.join("")}
										</div>
									</div>
									<h3
										className='text-2xl font-bold text-slate-100 mb-2'
										style={{ fontFamily: "'Montserrat', sans-serif" }}
									>
										{member.name}
									</h3>
									<p className='text-blue-400 font-medium mb-4'>
										{member.position}
									</p>
								</div>
								<p className='text-slate-400 leading-relaxed text-sm'>
									{member.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-32 relative'>
				<div className='absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'></div>

				<div className='relative max-w-7xl mx-auto px-6'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2
								className='text-4xl md:text-5xl font-bold mb-6'
								style={{ fontFamily: "'Montserrat', sans-serif" }}
							>
								Let's Build{" "}
								<span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>
									Something Great
								</span>
							</h2>
							<p className='text-xl text-slate-300 mb-8'>
								Have an idea or existing product? We'll help you design, build,
								and scale it.
							</p>

							{/* Quick Action Buttons */}
							<div className='flex flex-wrap justify-center gap-4 mb-12'>
								<a
									href='https://calendly.com/uvie-oghenejakpor-getnoddit/new-meeting?month=2026-01'
									target='_blank'
									rel='noopener noreferrer'
									className='group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2'
								>
									<span>Schedule a Call</span>
									<ArrowRight
										className='group-hover:translate-x-1 transition-transform'
										size={20}
									/>
								</a>
								<a
									href='mailto:hello@inaxa.com'
									className='px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-slate-100 font-semibold rounded-lg hover:bg-slate-800 hover:border-blue-500/50 transition-all duration-300'
								>
									Email Us Directly
								</a>
							</div>
						</div>

						{/* Contact Form */}
						<div className='p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-3xl'>
							<h3 className='text-2xl font-bold text-slate-100 mb-6 text-center'>
								Or Send Us a Message
							</h3>
							<form
								className='space-y-6'
								action='https://api.web3forms.com/submit'
								method='POST'
							>
								<input
									type='hidden'
									name='access_key'
									value='YOUR_ACCESS_KEY_HERE'
								/>
								<input
									type='hidden'
									name='subject'
									value='New Project Inquiry from Inaxa Website'
								/>
								<input
									type='hidden'
									name='from_name'
									value='Inaxa Contact Form'
								/>

								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<label className='block text-slate-300 mb-2 font-medium'>
											Name *
										</label>
										<input
											type='text'
											name='name'
											required
											className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors'
											placeholder='Your name'
										/>
									</div>
									<div>
										<label className='block text-slate-300 mb-2 font-medium'>
											Email *
										</label>
										<input
											type='email'
											name='email'
											required
											className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors'
											placeholder='your@email.com'
										/>
									</div>
								</div>

								<div>
									<label className='block text-slate-300 mb-2 font-medium'>
										Company
									</label>
									<input
										type='text'
										name='company'
										className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors'
										placeholder='Your company name'
									/>
								</div>

								<div>
									<label className='block text-slate-300 mb-2 font-medium'>
										Project Details *
									</label>
									<textarea
										name='message'
										rows={6}
										required
										className='w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 transition-colors resize-none'
										placeholder='Tell us about your project...'
									/>
								</div>

								<button
									type='submit'
									className='w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2'
								>
									Send Message
									<ArrowRight size={20} />
								</button>
							</form>

							<div className='mt-6 text-center text-sm text-slate-400'>
								<p>We typically respond within 24 hours</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 border-t border-slate-800'>
				<div className='max-w-7xl mx-auto px-6'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
						<div
							className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'
							style={{ fontFamily: "'Montserrat', sans-serif" }}
						>
							INAXA
						</div>
						<div className='text-slate-400 text-sm'>
							© 2025 Inaxa. Building the future of software.
						</div>
					</div>
				</div>
			</footer>

			<style jsx>{`
				@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap");

				@keyframes gradient {
					0%,
					100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}

				.animate-gradient {
					background-size: 200% auto;
					animation: gradient 3s ease infinite;
				}
			`}</style>
		</div>
	);
}
