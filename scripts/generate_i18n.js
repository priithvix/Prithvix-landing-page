const fs = require('fs');
const path = require('path');

const en = {
  "navbar": {
    "services": "Services",
    "aiAgent": "AI Agent",
    "about": "About",
    "contact": "Contact",
    "registerInterest": "Register Interest"
  },
  "footer": {
    "empowering": "Empowering India's agricultural ecosystem with technology. Built for farmers, dealers, and the entire agri value chain.",
    "services": {
      "heading": "Services",
      "machineryRental": "Machinery Rental",
      "labourServices": "Labour Services",
      "dealerErp": "Dealer ERP & CRM",
      "onlineStore": "Online Store",
      "aiAgent": "AI Agent"
    },
    "company": {
      "heading": "Company",
      "aboutUs": "About Us",
      "ourMission": "Our Mission",
      "careers": "Careers",
      "blog": "Blog",
      "press": "Press"
    },
    "contact": {
      "heading": "Contact",
      "whatsappUs": "WhatsApp Us",
      "privacyPolicy": "Privacy Policy",
      "termsOfUse": "Terms of Use"
    },
    "copyright": "© {year} PrithviX. All rights reserved. Made with ❤️ for Bharat's farmers."
  },
  "announcementBar": {
    "messages": [
      "Early registrations open - founding member pricing available",
      "Register now for priority access",
      "Questions? WhatsApp us:"
    ]
  },
  "hero": {
    "headline": [
      [{"text": "Smart", "color": "rabi"}, {"text": "Tools", "color": "rabi"}, {"text": "for", "color": "rabi"}],
      [{"text": "Bharat's", "color": "amber"}]
    ],
    "rotatingTexts": ["Farmers", "Dealers", "FPOs", "Agri-Business"],
    "subHeadline": "PrithviX connects agri input dealers and farmers through technology. One platform. Endless growth.",
    "ctaJoin": "Join the Platform",
    "ctaExplore": "Explore Services",
    "stats": [
      { "label": "Services in one platform" },
      { "label": "Indian languages supported" },
      { "label": "AI works non-stop", "static": "24/7" }
    ]
  },
  "marquee": [
    "Machinery Rental",
    "Labour Services",
    "Dealer ERP & CRM",
    "Online Store for Dealers",
    "AI Calling Agent",
    "WhatsApp AI Agent",
    "Credit Reminders",
    "Multi-Dealer Platform"
  ],
  "about": {
    "pill": "Who We Are",
    "heading": "Agriculture meets",
    "headingHighlight": "Technology",
    "sub": "PrithviX is building the complete digital infrastructure for India's agri input ecosystem - from the dealer's shop to the farmer's field.",
    "badge": "Built for India's Agricultural Ecosystem",
    "badgeSub": "Connecting Farmers · Dealers · Labourers across India",
    "features": [
      { "title": "Built for Bharat", "desc": "Designed specifically for India's agricultural markets - supports local languages, works on basic smartphones, and understands rural business models." },
      { "title": "AI at the Core", "desc": "Intelligent automation handles credit follow-ups, customer communication, and business insights - so you focus on farming and selling, not paperwork." },
      { "title": "One Ecosystem", "desc": "Farmers, dealers, equipment owners, and labour all connected on one platform - with trust, transparency, and technology." }
    ]
  },
  "services": {
    "pill": "What We Offer",
    "heading": "Four Powerful",
    "headingHighlight": "Services",
    "sub": "Everything the agri ecosystem needs under one roof.",
    "items": [
      { "number": "01 - RENTAL", "title": "Machinery Rental", "desc": "Farmers can rent tractors, harvesters, sprayers, and other equipment by the day. Equipment owners earn from idle machinery.", "features": ["List your equipment in minutes", "Rent by day, week, or season", "Verified equipment owners", "Location-based discovery", "Secure payments & booking"], "linkText": "List your equipment" },
      { "number": "02 - LABOUR", "title": "Labour Services", "desc": "Need workers for sowing, harvesting, or field work? PrithviX connects verified farm labourers directly to farmers who need them on-demand.", "features": ["Verified skilled farm workers", "Book by day or season", "Transparent pricing", "Rated & reviewed workers", "Available across districts"], "linkText": "Find workers near you" },
      { "number": "03 - ERP & CRM", "title": "Dealer ERP & CRM", "desc": "Complete business management for agri input dealers. Track inventory, manage credit, handle farmer relationships, and automate payment follow-ups - all in one place.", "features": ["Farmer CRM & QR lookup", "Sales, billing & GST invoices", "Udhaar (credit) management", "Inventory & batch tracking", "Daily close & analytics", "Statutory compliance registers", "WhatsApp orders & broadcast", "AI crop advisory", "Schemes & crop calendar", "Staff roles & permissions", "Region-wise sales reports", "Full Tally-style accounting & GST ERP", "Purchase, banking & reconciliation", "One shared database - no double entry"], "linkText": "Manage your business" },
      { "number": "04 - E-COMMERCE", "title": "Online Store for Dealers", "desc": "Agri input dealers can launch their own digital storefront in minutes. Sell seeds, fertilizers, pesticides, and equipment online - reach farmers beyond your local area.", "features": ["Your own branded online store", "Product catalogue management", "Online orders & payments", "Delivery tracking", "WhatsApp order notifications"], "linkText": "Launch your store" }
    ]
  },
  "dashboardPreview": {
    "pill": "See It Working",
    "heading": "The Dealer",
    "headingHighlight": "Dashboard",
    "sub": "Everything a dealer needs in one screen. Outstanding credit, farmer records, inventory levels, and AI call status - visible at a glance. No training needed.",
    "callouts": [
      { "title": "One-click credit reminders", "desc": "Send payment reminders to all overdue farmers with a single button." },
      { "title": "Live AI agent status", "desc": "See how many calls completed today and how many were answered." },
      { "title": "Full farmer ledger", "desc": "Every purchase, payment, and balance in one clear view." },
      { "title": "Low stock alerts", "desc": "Automatically flags products running low before sowing season." }
    ],
    "link": "Explore all features →"
  },
  "aiAgent": {
    "headingPrefix": "Your Business Runs on",
    "headingSuffix": "Autopilot",
    "sub": "PrithviX's AI agents handle your communication 24/7 - calling customers, sending WhatsApp reminders, and collecting information. No human operator needed.",
    "cta": "Get Early Access",
    "quote": "“A vision to Enable and Empower the Dealers and Farmers of India.”",
    "quoteAuthor": "Founder",
    "quoteCompany": "PrithviX",
    "cards": [
      { "title": "AI Voice Calling Agent", "desc": "Automatically calls farmers for credit repayment reminders, follow-ups, and order confirmations. Speaks in their local language. Works 24/7 without a human." },
      { "title": "WhatsApp AI Agent", "desc": "One AI agent handles hundreds of customers for multiple dealers simultaneously. Sends reminders, answers questions, collects data - all on WhatsApp." },
      { "title": "Multilingual Support", "desc": "Speaks and understands Hindi, Gujarati, Marathi, Telugu, and more. No language barrier between your business and your customers." },
      { "title": "Smart Data Collection", "desc": "AI asks the right questions, records answers, and automatically updates your CRM. No manual data entry after every call or conversation." }
    ]
  },
  "whoFor": {
    "heading": "Built for Farmers & Dealers",
    "cards": [
      { "title": "For Farmers", "sub": "Access everything you need to farm smarter.", "items": ["Rent tractors & machinery near you", "Hire skilled farm labour on demand", "Buy agri inputs online from trusted dealers", "Get AI-powered crop & service support", "Track your orders & bookings in one app", "Pay digitally - safe & transparent"], "cta": "Get Early Access →" },
      { "title": "For Dealers", "sub": "Manage your agri input business digitally.", "items": ["Full ERP & CRM for your shop", "Launch your own online store", "AI calls farmers for credit recovery", "WhatsApp agent handles customer queries", "Track inventory, sales & ledgers", "Reach farmers across your entire district"], "cta": "Get Early Access →" }
    ]
  },
  "howItWorks": {
    "pill": "Simple Process",
    "heading": "How PrithviX Works",
    "steps": [
      { "n": 1, "title": "Register", "desc": "Sign up as a Farmer, Dealer, Equipment Owner, or Labour Provider in under 2 minutes." },
      { "n": 2, "title": "Set Up Profile", "desc": "List your equipment, services, or products. Dealers set up their store and import their farmer database." },
      { "n": 3, "title": "Connect", "desc": "Farmers discover and book equipment, labour, and supplies. Dealers manage customers with AI tools." },
      { "n": 4, "title": "Grow", "desc": "AI handles follow-ups, reminders, and communication automatically while you focus on your work." }
    ]
  },
  "socialProof": {
    "stats": [
      "farmers & dealers registered",
      "districts covered",
      "services launching"
    ],
    "sub": "Be part of the first wave of farmers and dealers to digitise agriculture in India.",
    "ready": "ready"
  },
  "registerForm": {
    "pill": "Be one of the First",
    "headingPrefix": "Join PrithviX",
    "headingSuffix": "Early",
    "sub": "We're onboarding our first users. Register your interest today and get priority access when we launch in your area.",
    "benefits": ["Free to register", "Early access to all features", "Dedicated onboarding support", "Founding-member pricing, locked in"],
    "formHeading": "Register Your Interest",
    "labels": {
      "name": "Full Name",
      "namePlaceholder": "Your name",
      "phone": "Mobile Number",
      "phonePlaceholder": "+91 XXXXX XXXXX",
      "district": "District / City",
      "districtPlaceholder": "e.g. Ahmedabad, Surat, Nashik",
      "role": "I am a...",
      "roleOptions": ["Farmer", "Agri Input Dealer", "Equipment Owner", "Farm Labour Provider", "Other"],
      "service": "Interested in...",
      "serviceOptions": ["Machinery Rental", "Labour Services", "Dealer ERP & CRM", "Online Store", "AI Calling & WhatsApp Agent", "All Services"],
      "selectPlaceholder": "Select an option"
    },
    "errors": {
      "name": "Please enter your name",
      "phone": "Enter a valid 10-digit mobile number",
      "district": "Please enter your district",
      "role": "Please select an option",
      "service": "Please select an option"
    },
    "alreadyRegistered": "{count} farmers and dealers already registered.",
    "submit": "Submit Interest →",
    "sending": "Sending...",
    "errorMsg": "Something went wrong. Please try again or ",
    "errorLink": "WhatsApp us directly",
    "privacyMsg": "Free to join. No spam. We'll contact you within 1 hour.",
    "successHeading": "You're on the list!",
    "successSub": "We'll contact you within 24 hours. Expect a WhatsApp message from us.",
    "successBtn": "Message us now"
  },
  "faq": {
    "pill": "Common Questions",
    "heading": "Frequently Asked Questions",
    "items": [
      {
        "q": "Is it free to register? What will PrithviX charge me?",
        "a": [
          "Registering is completely free - for farmers, dealers, equipment owners, and labour providers. No credit card. No trial period. No hidden setup fee.",
          "PrithviX only earns when you earn. We charge a 12% platform fee on completed equipment rental bookings and 10% on completed labour bookings - deducted automatically before your payout. If no booking happens, we charge nothing.",
          "The Dealer ERP & CRM starts at ₹499/month - includes inventory, credit management, billing, GST invoices, and AI-powered payment reminders. No long-term contract. Cancel anytime."
        ]
      },
      {
        "q": "Is my data safe? Who can see my farmer customer list?",
        "a": [
          "Your farmer customer list is yours. Only you can see it - not other dealers, not our sales team, not anyone else on the platform. We do not use your customer data for our own marketing or share it with third parties. Ever.",
          "All data is stored encrypted on Indian servers. We comply with India's data protection regulations. If you ever close your account, we permanently delete your data within 30 days on request."
        ]
      },
      {
        "q": "Where is PrithviX available right now?",
        "a": [
          "We are launching first in Gujarat and Rajasthan. Maharashtra is next, followed by Madhya Pradesh.",
          "If your district is not listed, register anyway. We personally confirm your area's launch date within 24 hours of registration. Early registrations in unlaunched areas get first access when we expand there."
        ]
      },
      {
        "q": "I already use Tally. Can I move my dealer data to PrithviX?",
        "a": [
          "Yes. Export your data from Tally as Excel and we will help you import it into PrithviX - your farmer list, ledger balances, and product catalogue. Our onboarding team walks every new dealer through this personally. It typically takes one afternoon.",
          "PrithviX is not a replacement for Tally - it is built specifically for agri input dealers and does things Tally cannot: farmer CRM with crop calendars, AI calling for credit recovery, WhatsApp order management, and statutory compliance registers (Form N, Form XII, Seed registers)."
        ]
      },
      {
        "q": "Does the AI calling agent actually speak Hindi and Gujarati - or just English?",
        "a": [
          "The AI speaks and understands Hindi, Gujarati, Marathi, Telugu, and more - not just English. It handles code-switching naturally: if a farmer starts in Gujarati and switches to Hindi mid-sentence, the agent follows without missing a beat.",
          "The agent calls farmers on your behalf for credit payment reminders, order confirmations, and follow-up questions you define. Every call is recorded, transcribed, and summarised in your dashboard - with any payment commitments automatically logged against that farmer's account."
        ]
      },
      {
        "q": "If equipment breaks during a rental - who is responsible?",
        "a": [
          "Equipment owners list their machinery with photos and a verified condition rating before any booking goes live. Renters pay a refundable security deposit at booking time - held by PrithviX, not the owner.",
          "If equipment fails during a rental: PrithviX holds the full payment, the owner must provide a working replacement within 24 hours or issue a proportionate refund for downtime. All disputes are mediated by our team within 48 hours. The renter is never left stranded without recourse."
        ]
      },
      {
        "q": "I'm a farm worker. How and when do I get paid?",
        "a": [
          "Payment goes directly to your UPI ID or bank account within 24 hours of the farmer confirming the work is complete. You never handle cash, never chase anyone, and never wait weeks.",
          "PrithviX holds the farmer's payment in escrow from the moment you are booked. Once both parties confirm the job is done, it releases automatically. If there is any dispute about attendance or quality, our team mediates within 48 hours."
        ]
      },
      {
        "q": "When does PrithviX officially launch - and why register now?",
        "a": [
          "We are in pre-launch. The first 200 registered users in each district become Founding Members - they get: priority onboarding before the public launch; founding-member pricing locked in permanently, not available after launch; a dedicated setup call with our team; and first access to new features before they go public.",
          "Registering takes 60 seconds. We call you within 1 hour to confirm your spot and answer any questions personally."
        ]
      }
    ]
  },
  "floatingElements": {
    "whatsappHover": "Chat with us",
    "stickyRegister": "Register Free →"
  }
};

const hi = {
  "navbar": {
    "services": "सेवाएं",
    "aiAgent": "AI एजेंट",
    "about": "हमारे बारे में",
    "contact": "संपर्क करें",
    "registerInterest": "रजिस्टर करें"
  },
  "footer": {
    "empowering": "तकनीक के साथ भारत के कृषि पारिस्थितिकी तंत्र को सशक्त बनाना। किसानों, डीलरों और पूरी कृषि मूल्य श्रृंखला के लिए निर्मित।",
    "services": {
      "heading": "सेवाएं",
      "machineryRental": "मशीनरी रेंटल",
      "labourServices": "श्रम सेवाएं",
      "dealerErp": "डीलर ERP और CRM",
      "onlineStore": "ऑनलाइन स्टोर",
      "aiAgent": "AI एजेंट"
    },
    "company": {
      "heading": "कंपनी",
      "aboutUs": "हमारे बारे में",
      "ourMission": "हमारा मिशन",
      "careers": "करियर",
      "blog": "ब्लॉग",
      "press": "प्रेस"
    },
    "contact": {
      "heading": "संपर्क",
      "whatsappUs": "हमें WhatsApp करें",
      "privacyPolicy": "गोपनीयता नीति",
      "termsOfUse": "उपयोग की शर्तें"
    },
    "copyright": "© {year} PrithviX. सर्वाधिकार सुरक्षित। भारत के किसानों के लिए ❤️ से बनाया गया।"
  },
  "announcementBar": {
    "messages": [
      "शुरुआती रजिस्ट्रेशन खुले हैं - फाउंडिंग मेंबर प्राइसिंग उपलब्ध",
      "प्राथमिकता पहुंच के लिए अभी रजिस्टर करें",
      "कोई प्रश्न? हमें WhatsApp करें:"
    ]
  },
  "hero": {
    "headline": [
      [{"text": "भारत के", "color": "amber"}, {"text": "लिए", "color": "rabi"}],
      [{"text": "स्मार्ट", "color": "rabi"}, {"text": "उपकरण", "color": "rabi"}]
    ],
    "rotatingTexts": ["किसानों", "डीलरों", "FPOs", "एग्री-बिजनेस"],
    "subHeadline": "PrithviX तकनीक के माध्यम से एग्री इनपुट डीलरों और किसानों को जोड़ता है। एक प्लेटफॉर्म। अनंत विकास।",
    "ctaJoin": "प्लेटफॉर्म से जुड़ें",
    "ctaExplore": "सेवाएं देखें",
    "stats": [
      { "label": "सेवाएं एक प्लेटफॉर्म में" },
      { "label": "भारतीय भाषाएं समर्थित" },
      { "label": "AI नॉन-स्टॉप काम करता है", "static": "24/7" }
    ]
  },
  "marquee": [
    "मशीनरी रेंटल",
    "श्रम सेवाएं",
    "डीलर ERP और CRM",
    "डीलरों के लिए ऑनलाइन स्टोर",
    "AI कॉलिंग एजेंट",
    "WhatsApp AI एजेंट",
    "क्रेडिट रिमाइंडर",
    "मल्टी-डीलर प्लेटफॉर्म"
  ],
  "about": {
    "pill": "हम कौन हैं",
    "heading": "कृषि और",
    "headingHighlight": "तकनीक का संगम",
    "sub": "PrithviX भारत के एग्री इनपुट इकोसिस्टम के लिए संपूर्ण डिजिटल बुनियादी ढांचा तैयार कर रहा है - डीलर की दुकान से लेकर किसान के खेत तक।",
    "badge": "भारत के कृषि इकोसिस्टम के लिए निर्मित",
    "badgeSub": "पूरे भारत में किसानों · डीलरों · मजदूरों को जोड़ना",
    "features": [
      { "title": "भारत के लिए निर्मित", "desc": "विशेष रूप से भारत के कृषि बाजारों के लिए डिज़ाइन किया गया - स्थानीय भाषाओं का समर्थन करता है, बेसिक स्मार्टफोन पर काम करता है, और ग्रामीण व्यापार मॉडल को समझता है।" },
      { "title": "AI मूल में", "desc": "इंटेलिजेंट ऑटोमेशन क्रेडिट फॉलो-अप, ग्राहक संचार और व्यावसायिक अंतर्दृष्टि को संभालता है - ताकि आप खेती और बिक्री पर ध्यान केंद्रित कर सकें, कागजी कार्रवाई पर नहीं।" },
      { "title": "एक इकोसिस्टम", "desc": "किसान, डीलर, उपकरण मालिक और मजदूर सभी एक ही प्लेटफॉर्म पर जुड़े हुए हैं - विश्वास, पारदर्शिता और तकनीक के साथ।" }
    ]
  },
  "services": {
    "pill": "हम क्या ऑफर करते हैं",
    "heading": "चार शक्तिशाली",
    "headingHighlight": "सेवाएं",
    "sub": "कृषि इकोसिस्टम की जरूरत की हर चीज एक ही छत के नीचे।",
    "items": [
      { "number": "01 - रेंटल", "title": "मशीनरी रेंटल", "desc": "किसान दिन के हिसाब से ट्रैक्टर, हार्वेस्टर, स्प्रेयर और अन्य उपकरण किराए पर ले सकते हैं। उपकरण मालिक बेकार पड़ी मशीनरी से कमाते हैं।", "features": ["मिनटों में अपने उपकरण सूचीबद्ध करें", "दिन, सप्ताह या मौसम के हिसाब से किराए पर दें", "सत्यापित उपकरण मालिक", "स्थान-आधारित खोज", "सुरक्षित भुगतान और बुकिंग"], "linkText": "अपने उपकरण सूचीबद्ध करें" },
      { "number": "02 - श्रम", "title": "श्रम सेवाएं", "desc": "बुवाई, कटाई या खेत के काम के लिए श्रमिकों की आवश्यकता है? PrithviX सत्यापित खेत मजदूरों को सीधे उन किसानों से जोड़ता है जिन्हें उनकी आवश्यकता है।", "features": ["सत्यापित कुशल खेत मजदूर", "दिन या मौसम के हिसाब से बुक करें", "पारदर्शी मूल्य निर्धारण", "रेटेड और समीक्षित कर्मचारी", "जिलों में उपलब्ध"], "linkText": "अपने आस-पास कर्मचारी खोजें" },
      { "number": "03 - ERP और CRM", "title": "डीलर ERP और CRM", "desc": "एग्री इनपुट डीलरों के लिए संपूर्ण व्यवसाय प्रबंधन। इन्वेंट्री ट्रैक करें, क्रेडिट प्रबंधित करें, किसान संबंधों को संभालें, और भुगतान अनुवर्ती को स्वचालित करें - सब एक ही स्थान पर।", "features": ["किसान CRM और QR लुकअप", "बिक्री, बिलिंग और GST चालान", "उधार प्रबंधन", "इन्वेंट्री और बैच ट्रैकिंग", "दैनिक क्लोज और एनालिटिक्स", "वैधानिक अनुपालन रजिस्टर", "WhatsApp आदेश और प्रसारण", "AI फसल सलाहकार", "योजनाएं और फसल कैलेंडर", "कर्मचारी भूमिकाएं और अनुमतियां", "क्षेत्र-वार बिक्री रिपोर्ट", "पूर्ण Tally-शैली लेखांकन", "खरीद, बैंकिंग और समाधान", "एक साझा डेटाबेस - कोई दोहरी प्रविष्टि नहीं"], "linkText": "अपना व्यवसाय प्रबंधित करें" },
      { "number": "04 - ई-कॉमर्स", "title": "डीलरों के लिए ऑनलाइन स्टोर", "desc": "एग्री इनपुट डीलर मिनटों में अपना खुद का डिजिटल स्टोरफ्रंट लॉन्च कर सकते हैं। बीज, उर्वरक, कीटनाशक और उपकरण ऑनलाइन बेचें - अपने स्थानीय क्षेत्र से परे किसानों तक पहुंचें।", "features": ["आपका अपना ब्रांडेड ऑनलाइन स्टोर", "उत्पाद कैटलॉग प्रबंधन", "ऑनलाइन ऑर्डर और भुगतान", "डिलीवरी ट्रैकिंग", "WhatsApp ऑर्डर सूचनाएं"], "linkText": "अपना स्टोर लॉन्च करें" }
    ]
  },
  "dashboardPreview": {
    "pill": "इसे काम करते हुए देखें",
    "heading": "डीलर",
    "headingHighlight": "डैशबोर्ड",
    "sub": "एक डीलर को जो कुछ भी चाहिए वह एक स्क्रीन में। बकाया ऋण, किसान रिकॉर्ड, इन्वेंट्री स्तर, और AI कॉल स्थिति - एक नज़र में दिखाई देती है। किसी प्रशिक्षण की आवश्यकता नहीं है।",
    "callouts": [
      { "title": "एक-क्लिक क्रेडिट रिमाइंडर", "desc": "एक बटन के साथ सभी अतिदेय किसानों को भुगतान अनुस्मारक भेजें।" },
      { "title": "लाइव AI एजेंट स्थिति", "desc": "देखें कि आज कितनी कॉल पूरी हुईं और कितनों का उत्तर दिया गया।" },
      { "title": "पूर्ण किसान खाता बही", "desc": "हर खरीद, भुगतान, और शेष एक स्पष्ट दृश्य में।" },
      { "title": "कम स्टॉक अलर्ट", "desc": "बुवाई के मौसम से पहले कम चल रहे उत्पादों को स्वचालित रूप से फ़्लैग करता है।" }
    ],
    "link": "सभी विशेषताएं देखें →"
  },
  "aiAgent": {
    "headingPrefix": "आपका व्यवसाय",
    "headingSuffix": "ऑटोपायलट पर चलता है",
    "sub": "PrithviX के AI एजेंट 24/7 आपके संचार को संभालते हैं - ग्राहकों को कॉल करना, WhatsApp अनुस्मारक भेजना, और जानकारी एकत्र करना। किसी मानव ऑपरेटर की आवश्यकता नहीं है।",
    "cta": "अर्ली एक्सेस प्राप्त करें",
    "quote": "“भारत के डीलरों और किसानों को सक्षम और सशक्त बनाने का एक दृष्टिकोण।”",
    "quoteAuthor": "संस्थापक",
    "quoteCompany": "PrithviX",
    "cards": [
      { "title": "AI वॉयस कॉलिंग एजेंट", "desc": "क्रेडिट पुनर्भुगतान अनुस्मारक, फॉलो-अप और ऑर्डर पुष्टिकरण के लिए किसानों को स्वचालित रूप से कॉल करता है। उनकी स्थानीय भाषा में बोलता है। बिना इंसान के 24/7 काम करता है।" },
      { "title": "WhatsApp AI एजेंट", "desc": "एक AI एजेंट एक साथ कई डीलरों के लिए सैकड़ों ग्राहकों को संभालता है। रिमाइंडर भेजता है, सवालों के जवाब देता है, डेटा एकत्र करता है - सब WhatsApp पर।" },
      { "title": "बहुभाषी समर्थन", "desc": "हिंदी, गुजराती, मराठी, तेलुगु और बहुत कुछ बोलता और समझता है। आपके व्यवसाय और आपके ग्राहकों के बीच कोई भाषा बाधा नहीं है।" },
      { "title": "स्मार्ट डेटा संग्रह", "desc": "AI सही प्रश्न पूछता है, उत्तर रिकॉर्ड करता है, और स्वचालित रूप से आपके CRM को अपडेट करता है। हर कॉल के बाद कोई मैनुअल डेटा प्रविष्टि नहीं।" }
    ]
  },
  "whoFor": {
    "heading": "किसानों और डीलरों के लिए निर्मित",
    "cards": [
      { "title": "किसानों के लिए", "sub": "होशियारी से खेती करने के लिए आवश्यक हर चीज तक पहुंचें।", "items": ["अपने आस-पास ट्रैक्टर और मशीनरी किराए पर लें", "मांग पर कुशल खेत मजदूर किराए पर लें", "विश्वसनीय डीलरों से ऑनलाइन एग्री इनपुट खरीदें", "AI-संचालित फसल और सेवा सहायता प्राप्त करें", "एक ऐप में अपने ऑर्डर और बुकिंग ट्रैक करें", "डिजिटल रूप से भुगतान करें - सुरक्षित और पारदर्शी"], "cta": "अर्ली एक्सेस प्राप्त करें →" },
      { "title": "डीलरों के लिए", "sub": "अपने कृषि इनपुट व्यवसाय को डिजिटल रूप से प्रबंधित करें।", "items": ["आपकी दुकान के लिए पूर्ण ERP और CRM", "अपना खुद का ऑनलाइन स्टोर लॉन्च करें", "क्रेडिट वसूली के लिए AI किसानों को कॉल करता है", "WhatsApp एजेंट ग्राहकों के प्रश्नों को संभालता है", "इन्वेंट्री, बिक्री और लेजर ट्रैक करें", "अपने पूरे जिले के किसानों तक पहुंचें"], "cta": "अर्ली एक्सेस प्राप्त करें →" }
    ]
  },
  "howItWorks": {
    "pill": "सरल प्रक्रिया",
    "heading": "PrithviX कैसे काम करता है",
    "steps": [
      { "n": 1, "title": "रजिस्टर करें", "desc": "2 मिनट से कम समय में किसान, डीलर, उपकरण मालिक या श्रम प्रदाता के रूप में साइन अप करें।" },
      { "n": 2, "title": "प्रोफाइल सेट करें", "desc": "अपने उपकरण, सेवाएं या उत्पाद सूचीबद्ध करें। डीलर अपना स्टोर सेट करते हैं और अपना किसान डेटाबेस आयात करते हैं।" },
      { "n": 3, "title": "कनेक्ट करें", "desc": "किसान उपकरण, श्रम और आपूर्ति खोजते और बुक करते हैं। डीलर AI टूल से ग्राहकों का प्रबंधन करते हैं।" },
      { "n": 4, "title": "विकास करें", "desc": "AI स्वचालित रूप से अनुवर्ती, अनुस्मारक और संचार को संभालता है जबकि आप अपने काम पर ध्यान केंद्रित करते हैं।" }
    ]
  },
  "socialProof": {
    "stats": [
      "पंजीकृत किसान और डीलर",
      "कवर किए गए जिले",
      "सेवाएं शुरू हो रही हैं"
    ],
    "sub": "भारत में कृषि को डिजिटल बनाने वाले किसानों और डीलरों की पहली लहर का हिस्सा बनें।",
    "ready": "तैयार"
  },
  "registerForm": {
    "pill": "सबसे पहले बनें",
    "headingPrefix": "PrithviX से",
    "headingSuffix": "जल्दी जुड़ें",
    "sub": "हम अपने पहले उपयोगकर्ताओं को ऑनबोर्ड कर रहे हैं। आज ही अपनी रुचि दर्ज करें और जब हम आपके क्षेत्र में लॉन्च करेंगे तो प्राथमिकता पहुंच प्राप्त करें।",
    "benefits": ["रजिस्टर करने के लिए मुफ़्त", "सभी सुविधाओं तक जल्दी पहुंच", "समर्पित ऑनबोर्डिंग समर्थन", "फाउंडिंग-मेंबर प्राइसिंग, स्थायी"],
    "formHeading": "अपनी रुचि दर्ज करें",
    "labels": {
      "name": "पूरा नाम",
      "namePlaceholder": "आपका नाम",
      "phone": "मोबाइल नंबर",
      "phonePlaceholder": "+91 XXXXX XXXXX",
      "district": "जिला / शहर",
      "districtPlaceholder": "उदा. अहमदाबाद, सूरत, नासिक",
      "role": "मैं एक...",
      "roleOptions": ["किसान", "कृषि इनपुट डीलर", "उपकरण मालिक", "श्रम प्रदाता", "अन्य"],
      "service": "इसमें रुचि है...",
      "serviceOptions": ["मशीनरी रेंटल", "श्रम सेवाएं", "डीलर ERP और CRM", "ऑनलाइन स्टोर", "AI कॉलिंग और WhatsApp एजेंट", "सभी सेवाएं"],
      "selectPlaceholder": "एक विकल्प चुनें"
    },
    "errors": {
      "name": "कृपया अपना नाम दर्ज करें",
      "phone": "एक वैध 10-अंकीय मोबाइल नंबर दर्ज करें",
      "district": "कृपया अपना जिला दर्ज करें",
      "role": "कृपया एक विकल्प चुनें",
      "service": "कृपया एक विकल्प चुनें"
    },
    "alreadyRegistered": "{count} किसान और डीलर पहले ही पंजीकृत हो चुके हैं।",
    "submit": "रुचि सबमिट करें →",
    "sending": "भेजा जा रहा है...",
    "errorMsg": "कुछ गलत हो गया। कृपया पुनः प्रयास करें या ",
    "errorLink": "हमें सीधे WhatsApp करें",
    "privacyMsg": "जुड़ने के लिए मुफ़्त। कोई स्पैम नहीं। हम 1 घंटे के भीतर आपसे संपर्क करेंगे।",
    "successHeading": "आप सूची में हैं!",
    "successSub": "हम 24 घंटे के भीतर आपसे संपर्क करेंगे। हमारी ओर से एक WhatsApp संदेश की अपेक्षा करें।",
    "successBtn": "हमें अभी संदेश भेजें"
  },
  "faq": {
    "pill": "सामान्य प्रश्न",
    "heading": "अक्सर पूछे जाने वाले प्रश्न",
    "items": [
      {
        "q": "क्या रजिस्टर करना मुफ़्त है? PrithviX मुझसे क्या शुल्क लेगा?",
        "a": [
          "रजिस्टर करना पूरी तरह से मुफ़्त है - किसानों, डीलरों, उपकरण मालिकों और श्रम प्रदाताओं के लिए। कोई क्रेडिट कार्ड नहीं। कोई छिपा हुआ सेटअप शुल्क नहीं।",
          "PrithviX केवल तभी कमाता है जब आप कमाते हैं। हम पूर्ण उपकरण किराये की बुकिंग पर 12% प्लेटफ़ॉर्म शुल्क और पूर्ण श्रम बुकिंग पर 10% शुल्क लेते हैं। यदि कोई बुकिंग नहीं होती है, तो हम कुछ भी शुल्क नहीं लेते हैं।",
          "डीलर ERP और CRM ₹499/माह से शुरू होता है - इसमें इन्वेंट्री, क्रेडिट प्रबंधन, बिलिंग और AI-संचालित अनुस्मारक शामिल हैं। कभी भी रद्द करें।"
        ]
      },
      {
        "q": "क्या मेरा डेटा सुरक्षित है? मेरी किसान ग्राहक सूची कौन देख सकता है?",
        "a": [
          "आपकी किसान ग्राहक सूची आपकी है। केवल आप ही इसे देख सकते हैं - अन्य डीलर नहीं, हमारी बिक्री टीम नहीं। हम कभी भी आपके ग्राहक डेटा को तीसरे पक्ष के साथ साझा नहीं करते हैं।",
          "सभी डेटा भारतीय सर्वर पर एन्क्रिप्टेड संग्रहीत किया जाता है। यदि आप कभी अपना खाता बंद करते हैं, तो हम अनुरोध पर 30 दिनों के भीतर आपका डेटा स्थायी रूप से हटा देते हैं।"
        ]
      },
      {
        "q": "PrithviX अभी कहाँ उपलब्ध है?",
        "a": [
          "हम पहले गुजरात और राजस्थान में लॉन्च कर रहे हैं। उसके बाद महाराष्ट्र और मध्य प्रदेश।",
          "यदि आपका जिला सूचीबद्ध नहीं है, तो भी रजिस्टर करें। हम पंजीकरण के 24 घंटे के भीतर आपके क्षेत्र की लॉन्च तिथि की व्यक्तिगत रूप से पुष्टि करते हैं।"
        ]
      },
      {
        "q": "मैं पहले से ही Tally का उपयोग करता हूँ। क्या मैं अपना डीलर डेटा PrithviX में ले जा सकता हूँ?",
        "a": [
          "हाँ। Tally से अपना डेटा एक्सेल के रूप में निर्यात करें और हम इसे PrithviX में आयात करने में आपकी सहायता करेंगे। हमारी ऑनबोर्डिंग टीम हर नए डीलर को व्यक्तिगत रूप से इसके माध्यम से ले जाती है।",
          "PrithviX Tally का प्रतिस्थापन नहीं है - यह विशेष रूप से एग्री इनपुट डीलरों के लिए बनाया गया है और वे काम करता है जो Tally नहीं कर सकता: फसल कैलेंडर के साथ किसान CRM, AI कॉलिंग, WhatsApp ऑर्डर प्रबंधन।"
        ]
      },
      {
        "q": "क्या AI कॉलिंग एजेंट वास्तव में हिंदी और गुजराती बोलता है?",
        "a": [
          "AI हिंदी, गुजराती, मराठी, तेलुगु और बहुत कुछ बोलता और समझता है। यदि कोई किसान गुजराती में शुरू होता है और बीच में हिंदी में बदल जाता है, तो एजेंट बिना किसी परेशानी के उसका अनुसरण करता है।",
          "एजेंट आपकी ओर से किसानों को क्रेडिट भुगतान अनुस्मारक और ऑर्डर पुष्टिकरण के लिए कॉल करता है। हर कॉल को रिकॉर्ड किया जाता है और आपके डैशबोर्ड में संक्षेपित किया जाता है।"
        ]
      },
      {
        "q": "यदि किराए के दौरान उपकरण टूट जाता है - तो कौन जिम्मेदार है?",
        "a": [
          "उपकरण मालिक अपनी मशीनरी को फ़ोटो और सत्यापित स्थिति रेटिंग के साथ सूचीबद्ध करते हैं। किराएदार बुकिंग के समय एक वापसी योग्य सुरक्षा जमा राशि का भुगतान करते हैं - जिसे PrithviX द्वारा रखा जाता है।",
          "यदि उपकरण विफल हो जाता है: मालिक को 24 घंटे के भीतर एक कार्यशील प्रतिस्थापन प्रदान करना होगा या आनुपातिक धनवापसी जारी करनी होगी। सभी विवादों की मध्यस्थता हमारी टीम द्वारा 48 घंटों के भीतर की जाती है।"
        ]
      },
      {
        "q": "मैं एक खेत मजदूर हूँ। मुझे भुगतान कैसे और कब मिलेगा?",
        "a": [
          "किसान द्वारा काम पूरा होने की पुष्टि करने के 24 घंटे के भीतर भुगतान सीधे आपके UPI ID या बैंक खाते में चला जाता है। आप कभी भी नकदी नहीं संभालते, कभी किसी का पीछा नहीं करते।",
          "जैसे ही आप बुक होते हैं, PrithviX किसान के भुगतान को एस्क्रो में रखता है। एक बार दोनों पक्ष पुष्टि कर देते हैं कि काम हो गया है, यह स्वचालित रूप से जारी हो जाता है।"
        ]
      },
      {
        "q": "PrithviX आधिकारिक तौर पर कब लॉन्च होता है - और अभी क्यों रजिस्टर करें?",
        "a": [
          "हम प्री-लॉन्च में हैं। प्रत्येक जिले में पहले 200 पंजीकृत उपयोगकर्ता फाउंडिंग मेंबर बन जाते हैं - उन्हें मिलता है: प्राथमिकता ऑनबोर्डिंग; फाउंडिंग-मेंबर मूल्य निर्धारण; और नई सुविधाओं तक पहली पहुंच।",
          "रजिस्टर करने में 60 सेकंड लगते हैं। हम आपके स्थान की पुष्टि करने और किसी भी प्रश्न का उत्तर देने के लिए 1 घंटे के भीतर आपको कॉल करते हैं।"
        ]
      }
    ]
  },
  "floatingElements": {
    "whatsappHover": "हमसे चैट करें",
    "stickyRegister": "मुफ़्त रजिस्टर करें →"
  }
};

const gu = {
  "navbar": {
    "services": "સેવાઓ",
    "aiAgent": "AI એજન્ટ",
    "about": "અમારા વિશે",
    "contact": "સંપર્ક કરો",
    "registerInterest": "રજીસ્ટર કરો"
  },
  "footer": {
    "empowering": "ટેકનોલોજી સાથે ભારતના કૃષિ ઇકોસિસ્ટમને સશક્ત બનાવવું. ખેડૂતો, ડીલરો અને સમગ્ર કૃષિ મૂલ્ય શૃંખલા માટે નિર્મિત.",
    "services": {
      "heading": "સેવાઓ",
      "machineryRental": "મશીનરી રેન્ટલ",
      "labourServices": "શ્રમ સેવાઓ",
      "dealerErp": "ડીલર ERP અને CRM",
      "onlineStore": "ઓનલાઈન સ્ટોર",
      "aiAgent": "AI એજન્ટ"
    },
    "company": {
      "heading": "કંપની",
      "aboutUs": "અમારા વિશે",
      "ourMission": "અમારું મિશન",
      "careers": "કારકિર્દી",
      "blog": "બ્લોગ",
      "press": "પ્રેસ"
    },
    "contact": {
      "heading": "સંપર્ક",
      "whatsappUs": "અમને WhatsApp કરો",
      "privacyPolicy": "ગોપનીયતા નીતિ",
      "termsOfUse": "ઉપયોગની શરતો"
    },
    "copyright": "© {year} PrithviX. સર્વાધિકાર સુરક્ષિત. ભારતના ખેડૂતો માટે ❤️ થી બનાવેલ."
  },
  "announcementBar": {
    "messages": [
      "પ્રારંભિક રજીસ્ટ્રેશન ખુલ્લું છે - ફાઉન્ડિંગ મેમ્બર પ્રાઇસિંગ ઉપલબ્ધ છે",
      "પ્રાયોરિટી એક્સેસ માટે હમણાં જ રજીસ્ટર કરો",
      "કોઈ પ્રશ્નો? અમને WhatsApp કરો:"
    ]
  },
  "hero": {
    "headline": [
      [{"text": "ભારતના", "color": "amber"}, {"text": "માટે", "color": "rabi"}],
      [{"text": "સ્માર્ટ", "color": "rabi"}, {"text": "સાધનો", "color": "rabi"}]
    ],
    "rotatingTexts": ["ખેડૂતો", "ડીલરો", "FPOs", "એગ્રી-બિઝનેસ"],
    "subHeadline": "PrithviX ટેકનોલોજી દ્વારા એગ્રી ઇનપુટ ડીલરો અને ખેડૂતોને જોડે છે. એક પ્લેટફોર્મ. અનંત વિકાસ.",
    "ctaJoin": "પ્લેટફોર્મમાં જોડાઓ",
    "ctaExplore": "સેવાઓ જુઓ",
    "stats": [
      { "label": "એક પ્લેટફોર્મમાં સેવાઓ" },
      { "label": "ભારતીય ભાષાઓ સપોર્ટેડ" },
      { "label": "AI નોન-સ્ટોપ કામ કરે છે", "static": "24/7" }
    ]
  },
  "marquee": [
    "મશીનરી રેન્ટલ",
    "શ્રમ સેવાઓ",
    "ડીલર ERP અને CRM",
    "ડીલરો માટે ઓનલાઈન સ્ટોર",
    "AI કોલિંગ એજન્ટ",
    "WhatsApp AI એજન્ટ",
    "ક્રેડિટ રિમાઇન્ડર",
    "મલ્ટી-ડીલર પ્લેટફોર્મ"
  ],
  "about": {
    "pill": "અમે કોણ છીએ",
    "heading": "કૃષિ અને",
    "headingHighlight": "ટેકનોલોજીનો સંગમ",
    "sub": "PrithviX ભારતના એગ્રી ઇનપુટ ઇકોસિસ્ટમ માટે સંપૂર્ણ ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર બનાવી રહ્યું છે - ડીલરની દુકાનથી લઈને ખેડૂતના ખેતર સુધી.",
    "badge": "ભારતના કૃષિ ઇકોસિસ્ટમ માટે નિર્મિત",
    "badgeSub": "સમગ્ર ભારતમાં ખેડૂતો · ડીલરો · મજૂરોને જોડવા",
    "features": [
      { "title": "ભારત માટે નિર્મિત", "desc": "ખાસ કરીને ભારતના કૃષિ બજારો માટે ડિઝાઇન કરેલ - સ્થાનિક ભાષાઓને સપોર્ટ કરે છે, બેઝિક સ્માર્ટફોન પર કામ કરે છે, અને ગ્રામીણ વ્યાપાર મોડલને સમજે છે." },
      { "title": "AI મૂળમાં", "desc": "ઇન્ટેલિજન્ટ ઓટોમેશન ક્રેડિટ ફોલો-અપ્સ, ગ્રાહક સંચાર અને બિઝનેસ ઇનસાઇટ્સ સંભાળે છે - જેથી તમે ખેતી અને વેચાણ પર ધ્યાન કેન્દ્રિત કરી શકો, કાગળ પર નહીં." },
      { "title": "એક ઇકોસિસ્ટમ", "desc": "ખેડૂતો, ડીલરો, સાધનોના માલિકો અને મજૂરો બધા એક જ પ્લેટફોર્મ પર જોડાયેલા છે - વિશ્વાસ, પારદર્શિતા અને ટેકનોલોજી સાથે." }
    ]
  },
  "services": {
    "pill": "અમે શું ઓફર કરીએ છીએ",
    "heading": "ચાર શક્તિશાળી",
    "headingHighlight": "સેવાઓ",
    "sub": "કૃષિ ઇકોસિસ્ટમની જરૂરિયાતની દરેક વસ્તુ એક જ છત નીચે.",
    "items": [
      { "number": "01 - રેન્ટલ", "title": "મશીનરી રેન્ટલ", "desc": "ખેડૂતો દિવસ પ્રમાણે ટ્રેક્ટર, હાર્વેસ્ટર, સ્પ્રેયર અને અન્ય સાધનો ભાડે લઈ શકે છે. સાધનોના માલિકો નિષ્ક્રિય મશીનરીથી કમાણી કરે છે.", "features": ["મિનિટોમાં તમારા સાધનોની સૂચિ બનાવો", "દિવસ, અઠવાડિયા અથવા સીઝન પ્રમાણે ભાડે આપો", "ચકાસાયેલ સાધનોના માલિકો", "સ્થાન-આધારિત શોધ", "સુરક્ષિત ચુકવણી અને બુકિંગ"], "linkText": "તમારા સાધનોની સૂચિ બનાવો" },
      { "number": "02 - શ્રમ", "title": "શ્રમ સેવાઓ", "desc": "વાવણી, લણણી અથવા ખેતરના કામ માટે કામદારોની જરૂર છે? PrithviX ચકાસાયેલ ખેત મજૂરોને સીધા જ તે ખેડૂતો સાથે જોડે છે જેમને તેમની જરૂર છે.", "features": ["ચકાસાયેલ કુશળ ખેત મજૂરો", "દિવસ અથવા સીઝન પ્રમાણે બુક કરો", "પારદર્શક ભાવો", "રેટેડ અને રિવ્યૂડ કામદારો", "જિલ્લાઓમાં ઉપલબ્ધ"], "linkText": "તમારી નજીકના કામદારો શોધો" },
      { "number": "03 - ERP અને CRM", "title": "ડીલર ERP અને CRM", "desc": "એગ્રી ઇનપુટ ડીલરો માટે સંપૂર્ણ બિઝનેસ મેનેજમેન્ટ. ઇન્વેન્ટરી ટ્રૅક કરો, ક્રેડિટ મેનેજ કરો, ખેડૂત સંબંધો સંભાળો અને ચુકવણી ફોલો-અપ્સને સ્વચાલિત કરો - બધું એક જ જગ્યાએ.", "features": ["ખેડૂત CRM અને QR લુકઅપ", "વેચાણ, બિલિંગ અને GST ઇન્વૉઇસ", "ઉધાર મેનેજમેન્ટ", "ઇન્વેન્ટરી અને બેચ ટ્રેકિંગ", "દૈનિક ક્લોઝ અને એનાલિટિક્સ", "વૈધાનિક અનુપાલન રજિસ્ટર", "WhatsApp ઓર્ડર અને બ્રોડકાસ્ટ", "AI પાક સલાહકાર", "યોજનાઓ અને પાક કેલેન્ડર", "સ્ટાફ ભૂમિકાઓ અને પરવાનગીઓ", "વિસ્તાર-વાર વેચાણ રિપોર્ટ્સ", "સંપૂર્ણ Tally-શૈલી એકાઉન્ટિંગ", "ખરીદી, બેંકિંગ અને સમાધાન", "એક શેર કરેલ ડેટાબેઝ - કોઈ ડબલ એન્ટ્રી નહીં"], "linkText": "તમારો વ્યવસાય મેનેજ કરો" },
      { "number": "04 - ઈ-કોમર્સ", "title": "ડીલરો માટે ઓનલાઈન સ્ટોર", "desc": "એગ્રી ઇનપુટ ડીલરો મિનિટોમાં પોતાનો ડિજિટલ સ્ટોરફ્રન્ટ લોન્ચ કરી શકે છે. બિયારણ, ખાતર, જંતુનાશકો અને સાધનો ઓનલાઈન વેચો - તમારા સ્થાનિક વિસ્તારની બહારના ખેડૂતો સુધી પહોંચો.", "features": ["તમારો પોતાનો બ્રાન્ડેડ ઓનલાઈન સ્ટોર", "પ્રોડક્ટ કેટેલોગ મેનેજમેન્ટ", "ઓનલાઈન ઓર્ડર અને ચુકવણી", "ડિલિવરી ટ્રેકિંગ", "WhatsApp ઓર્ડર સૂચનાઓ"], "linkText": "તમારો સ્ટોર લોન્ચ કરો" }
    ]
  },
  "dashboardPreview": {
    "pill": "તેને કામ કરતા જુઓ",
    "heading": "ડીલર",
    "headingHighlight": "ડેશબોર્ડ",
    "sub": "એક ડીલરને જે કંઈ પણ જોઈએ તે એક સ્ક્રીનમાં. બાકી ધિરાણ, ખેડૂત રેકોર્ડ્સ, ઇન્વેન્ટરી સ્તરો, અને AI કૉલ સ્થિતિ - એક નજરમાં જોઈ શકાય છે. કોઈ તાલીમની જરૂર નથી.",
    "callouts": [
      { "title": "એક-ક્લિક ક્રેડિટ રિમાઇન્ડર", "desc": "એક બટન સાથે તમામ બાકી ખેડૂતોને ચુકવણી રીમાઇન્ડર્સ મોકલો." },
      { "title": "લાઇવ AI એજન્ટ સ્થિતિ", "desc": "જુઓ કે આજે કેટલા કૉલ પૂર્ણ થયા અને કેટલાનો જવાબ આપવામાં આવ્યો." },
      { "title": "સંપૂર્ણ ખેડૂત ખાતાવહી", "desc": "દરેક ખરીદી, ચુકવણી, અને બેલેન્સ એક સ્પષ્ટ વ્યુમાં." },
      { "title": "લો સ્ટોક એલર્ટ્સ", "desc": "વાવણીની સીઝન પહેલાં ઓછાં ચાલતા ઉત્પાદનોને આપમેળે ફ્લેગ કરે છે." }
    ],
    "link": "તમામ સુવિધાઓ જુઓ →"
  },
  "aiAgent": {
    "headingPrefix": "તમારો વ્યવસાય",
    "headingSuffix": "ઓટોપાયલોટ પર ચાલે છે",
    "sub": "PrithviX ના AI એજન્ટો 24/7 તમારા સંચારને સંભાળે છે - ગ્રાહકોને કૉલ કરવા, WhatsApp રીમાઇન્ડર્સ મોકલવા, અને માહિતી એકત્રિત કરવી. કોઈ માનવ ઓપરેટરની જરૂર નથી.",
    "cta": "અર્લી એક્સેસ મેળવો",
    "quote": "“ભારતના ડીલરો અને ખેડૂતોને સક્ષમ અને સશક્ત બનાવવાનું એક વિઝન.”",
    "quoteAuthor": "સ્થાપક",
    "quoteCompany": "PrithviX",
    "cards": [
      { "title": "AI વૉઇસ કૉલિંગ એજન્ટ", "desc": "ક્રેડિટ ચુકવણી રીમાઇન્ડર્સ, ફોલો-અપ્સ અને ઓર્ડર કન્ફર્મેશન માટે ખેડૂતોને આપમેળે કૉલ કરે છે. તેમની સ્થાનિક ભાષામાં બોલે છે. માણસ વિના 24/7 કામ કરે છે." },
      { "title": "WhatsApp AI એજન્ટ", "desc": "એક AI એજન્ટ એકસાથે અનેક ડીલરો માટે સેંકડો ગ્રાહકોને સંભાળે છે. રીમાઇન્ડર્સ મોકલે છે, પ્રશ્નોના જવાબ આપે છે, ડેટા એકત્રિત કરે છે - બધું જ WhatsApp પર." },
      { "title": "બહુભાષી સપોર્ટ", "desc": "હિન્દી, ગુજરાતી, મરાઠી, તેલુગુ અને બીજી ઘણી ભાષાઓ બોલે છે અને સમજે છે. તમારા વ્યવસાય અને તમારા ગ્રાહકો વચ્ચે કોઈ ભાષા અવરોધ નથી." },
      { "title": "સ્માર્ટ ડેટા કલેક્શન", "desc": "AI સાચા પ્રશ્નો પૂછે છે, જવાબો રેકોર્ડ કરે છે, અને આપમેળે તમારા CRM ને અપડેટ કરે છે. દરેક કૉલ પછી કોઈ મેન્યુઅલ ડેટા એન્ટ્રી નથી." }
    ]
  },
  "whoFor": {
    "heading": "ખેડૂતો અને ડીલરો માટે નિર્મિત",
    "cards": [
      { "title": "ખેડૂતો માટે", "sub": "સ્માર્ટ ખેતી કરવા માટે જરૂરી દરેક વસ્તુ ઍક્સેસ કરો.", "items": ["તમારી નજીક ટ્રેક્ટર અને મશીનરી ભાડે લો", "માંગ પર કુશળ ખેત મજૂરો ભાડે લો", "વિશ્વસનીય ડીલરો પાસેથી ઓનલાઈન એગ્રી ઇનપુટ ખરીદો", "AI-સંચાલિત પાક અને સેવા સહાય મેળવો", "એક એપમાં તમારા ઓર્ડર અને બુકિંગને ટ્રૅક કરો", "ડિજિટલ રીતે ચૂકવણી કરો - સુરક્ષિત અને પારદર્શક"], "cta": "અર્લી એક્સેસ મેળવો →" },
      { "title": "ડીલરો માટે", "sub": "તમારા એગ્રી ઇનપુટ વ્યવસાયને ડિજિટલ રીતે મેનેજ કરો.", "items": ["તમારી દુકાન માટે સંપૂર્ણ ERP અને CRM", "તમારો પોતાનો ઓનલાઈન સ્ટોર લોન્ચ કરો", "ક્રેડિટ રિકવરી માટે AI ખેડૂતોને કૉલ કરે છે", "WhatsApp એજન્ટ ગ્રાહકના પ્રશ્નો સંભાળે છે", "ઇન્વેન્ટરી, વેચાણ અને લેજર ટ્રૅક કરો", "તમારા આખા જિલ્લાના ખેડૂતો સુધી પહોંચો"], "cta": "અર્લી એક્સેસ મેળવો →" }
    ]
  },
  "howItWorks": {
    "pill": "સરળ પ્રક્રિયા",
    "heading": "PrithviX કેવી રીતે કામ કરે છે",
    "steps": [
      { "n": 1, "title": "રજીસ્ટર કરો", "desc": "2 મિનિટથી ઓછા સમયમાં ખેડૂત, ડીલર, સાધનોના માલિક અથવા શ્રમ પ્રદાતા તરીકે સાઇન અપ કરો." },
      { "n": 2, "title": "પ્રોફાઇલ સેટ કરો", "desc": "તમારા સાધનો, સેવાઓ અથવા ઉત્પાદનોની સૂચિ બનાવો. ડીલરો તેમનો સ્ટોર સેટ કરે છે અને તેમનો ખેડૂત ડેટાબેઝ આયાત કરે છે." },
      { "n": 3, "title": "કનેક્ટ કરો", "desc": "ખેડૂતો સાધનો, શ્રમ અને પુરવઠો શોધે છે અને બુક કરે છે. ડીલરો AI સાધનો વડે ગ્રાહકોનું સંચાલન કરે છે." },
      { "n": 4, "title": "વિકાસ કરો", "desc": "AI આપમેળે ફોલો-અપ્સ, રીમાઇન્ડર્સ અને સંચાર સંભાળે છે જ્યારે તમે તમારા કામ પર ધ્યાન કેન્દ્રિત કરો છો." }
    ]
  },
  "socialProof": {
    "stats": [
      "નોંધાયેલ ખેડૂતો અને ડીલરો",
      "આવરી લેવામાં આવેલ જિલ્લાઓ",
      "સેવાઓ શરૂ થઈ રહી છે"
    ],
    "sub": "ભારતમાં ખેતીને ડિજિટલ બનાવનારા ખેડૂતો અને ડીલરોની પ્રથમ લહેરનો ભાગ બનો.",
    "ready": "તૈયાર"
  },
  "registerForm": {
    "pill": "સૌથી પહેલા બનો",
    "headingPrefix": "PrithviX માં",
    "headingSuffix": "જલ્દી જોડાઓ",
    "sub": "અમે અમારા પ્રથમ વપરાશકર્તાઓને ઓનબોર્ડ કરી રહ્યા છીએ. આજે જ તમારી રુચિ નોંધાવો અને જ્યારે અમે તમારા વિસ્તારમાં લોન્ચ કરીએ ત્યારે પ્રાયોરિટી એક્સેસ મેળવો.",
    "benefits": ["રજીસ્ટર કરવા માટે મફત", "તમામ સુવિધાઓનો વહેલો એક્સેસ", "સમર્પિત ઓનબોર્ડિંગ સપોર્ટ", "ફાઉન્ડિંગ-મેમ્બર પ્રાઇસિંગ, કાયમી"],
    "formHeading": "તમારી રુચિ નોંધાવો",
    "labels": {
      "name": "પૂરું નામ",
      "namePlaceholder": "તમારું નામ",
      "phone": "મોબાઈલ નંબર",
      "phonePlaceholder": "+91 XXXXX XXXXX",
      "district": "જિલ્લો / શહેર",
      "districtPlaceholder": "દા.ત. અમદાવાદ, સુરત, નવસારી",
      "role": "હું એક...",
      "roleOptions": ["ખેડૂત", "એગ્રી ઇનપુટ ડીલર", "સાધનોના માલિક", "શ્રમ પ્રદાતા", "અન્ય"],
      "service": "રસ છે...",
      "serviceOptions": ["મશીનરી રેન્ટલ", "શ્રમ સેવાઓ", "ડીલર ERP અને CRM", "ઓનલાઈન સ્ટોર", "AI કોલિંગ અને WhatsApp એજન્ટ", "તમામ સેવાઓ"],
      "selectPlaceholder": "એક વિકલ્પ પસંદ કરો"
    },
    "errors": {
      "name": "કૃપા કરીને તમારું નામ દાખલ કરો",
      "phone": "માન્ય 10-આંકડાનો મોબાઇલ નંબર દાખલ કરો",
      "district": "કૃપા કરીને તમારો જિલ્લો દાખલ કરો",
      "role": "કૃપા કરીને એક વિકલ્પ પસંદ કરો",
      "service": "કૃપા કરીને એક વિકલ્પ પસંદ કરો"
    },
    "alreadyRegistered": "{count} ખેડૂતો અને ડીલરો પહેલેથી જ નોંધાયેલા છે.",
    "submit": "રુચિ સબમિટ કરો →",
    "sending": "મોકલી રહ્યું છે...",
    "errorMsg": "કંઈક ખોટું થયું. કૃપા કરીને ફરી પ્રયાસ કરો અથવા ",
    "errorLink": "અમને સીધા જ WhatsApp કરો",
    "privacyMsg": "જોડાવા માટે મફત. કોઈ સ્પામ નહીં. અમે 1 કલાકની અંદર તમારો સંપર્ક કરીશું.",
    "successHeading": "તમે યાદીમાં છો!",
    "successSub": "અમે 24 કલાકની અંદર તમારો સંપર્ક કરીશું. અમારા તરફથી WhatsApp સંદેશની અપેક્ષા રાખો.",
    "successBtn": "અમને હમણાં સંદેશ મોકલો"
  },
  "faq": {
    "pill": "સામાન્ય પ્રશ્નો",
    "heading": "વારંવાર પૂછાતા પ્રશ્નો",
    "items": [
      {
        "q": "શું રજીસ્ટર કરવું મફત છે? PrithviX મારી પાસેથી શું ચાર્જ લેશે?",
        "a": [
          "રજીસ્ટર કરવું સંપૂર્ણપણે મફત છે - ખેડૂતો, ડીલરો, સાધનોના માલિકો અને શ્રમ પ્રદાતાઓ માટે. કોઈ ક્રેડિટ કાર્ડ નહીં. કોઈ છુપો સેટઅપ ચાર્જ નહીં.",
          "PrithviX ફક્ત ત્યારે જ કમાય છે જ્યારે તમે કમાઓ છો. અમે પૂર્ણ થયેલ સાધનોના ભાડાના બુકિંગ પર 12% પ્લેટફોર્મ ફી અને પૂર્ણ થયેલ મજૂરી બુકિંગ પર 10% ચાર્જ લઈએ છીએ.",
          "ડીલર ERP અને CRM ₹499/મહિનાથી શરૂ થાય છે - જેમાં ઇન્વેન્ટરી, ક્રેડિટ મેનેજમેન્ટ, બિલિંગ અને AI-સંચાલિત રીમાઇન્ડર્સ શામેલ છે. ગમે ત્યારે રદ કરો."
        ]
      },
      {
        "q": "શું મારો ડેટા સુરક્ષિત છે? મારી ખેડૂત ગ્રાહક યાદી કોણ જોઈ શકે છે?",
        "a": [
          "તમારી ખેડૂત ગ્રાહક યાદી તમારી છે. માત્ર તમે જ તેને જોઈ શકો છો - અન્ય ડીલરો નહીં, અમારી સેલ્સ ટીમ નહીં. અમે ક્યારેય તમારો ડેટા શેર કરતા નથી.",
          "બધો ડેટા ભારતીય સર્વર્સ પર એન્ક્રિપ્ટેડ સંગ્રહિત છે. જો તમે ક્યારેય તમારું ખાતું બંધ કરો છો, તો અમે વિનંતી પર 30 દિવસની અંદર તમારો ડેટા કાયમ માટે કાઢી નાખીએ છીએ."
        ]
      },
      {
        "q": "PrithviX અત્યારે ક્યાં ઉપલબ્ધ છે?",
        "a": [
          "અમે સૌપ્રથમ ગુજરાત અને રાજસ્થાનમાં લોન્ચ કરી રહ્યા છીએ. ત્યારબાદ મહારાષ્ટ્ર અને મધ્ય પ્રદેશ.",
          "જો તમારો જિલ્લો સૂચિબદ્ધ નથી, તો પણ રજીસ્ટર કરો. અમે નોંધણીના 24 કલાકની અંદર તમારા વિસ્તારની લોન્ચ તારીખની વ્યક્તિગત રીતે પુષ્ટિ કરીએ છીએ."
        ]
      },
      {
        "q": "હું પહેલેથી જ Tally નો ઉપયોગ કરું છું. શું હું મારો ડીલર ડેટા PrithviX માં ખસેડી શકું?",
        "a": [
          "હા. Tally માંથી તમારો ડેટા એક્સેલ તરીકે નિકાસ કરો અને અમે તેને PrithviX માં આયાત કરવામાં તમારી મદદ કરીશું. અમારી ટીમ દરેક નવા ડીલરને મદદ કરે છે.",
          "PrithviX એ Tally નું સ્થાન નથી - તે ખાસ કરીને એગ્રી ઇનપુટ ડીલરો માટે બનાવવામાં આવ્યું છે અને તે કામ કરે છે જે Tally કરી શકતું નથી: ક્રોપ કેલેન્ડર સાથે ખેડૂત CRM, AI કૉલિંગ, WhatsApp ઓર્ડર મેનેજમેન્ટ."
        ]
      },
      {
        "q": "શું AI કૉલિંગ એજન્ટ ખરેખર હિન્દી અને ગુજરાતી બોલે છે?",
        "a": [
          "AI હિન્દી, ગુજરાતી, મરાઠી, તેલુગુ અને બીજી ઘણી ભાષાઓ બોલે છે અને સમજે છે. જો કોઈ ખેડૂત ગુજરાતીમાં શરૂ કરે છે અને વચ્ચે હિન્દીમાં સ્વિચ કરે છે, તો એજન્ટ સરળતાથી સમજી જાય છે.",
          "એજન્ટ ક્રેડિટ ચુકવણી રીમાઇન્ડર્સ અને ઓર્ડર કન્ફર્મેશન માટે તમારા વતી ખેડૂતોને કૉલ કરે છે. દરેક કૉલ રેકોર્ડ કરવામાં આવે છે અને તમારા ડેશબોર્ડમાં જોવા મળે છે."
        ]
      },
      {
        "q": "જો ભાડા દરમિયાન સાધન તૂટી જાય - તો કોણ જવાબદાર છે?",
        "a": [
          "સાધનોના માલિકો ફોટા અને વેરિફાઈડ કન્ડિશન રેટિંગ સાથે તેમની મશીનરીની યાદી આપે છે. ભાડૂતો બુકિંગ સમયે રિફંડેબલ સિક્યુરિટી ડિપોઝિટ ચૂકવે છે - જે PrithviX પાસે રહે છે.",
          "જો સાધન નિષ્ફળ જાય: માલિકે 24 કલાકની અંદર રિપ્લેસમેન્ટ આપવું પડશે અથવા રિફંડ જારી કરવું પડશે. તમામ વિવાદો અમારી ટીમ દ્વારા 48 કલાકમાં ઉકેલવામાં આવે છે."
        ]
      },
      {
        "q": "હું એક ખેત મજૂર છું. મને ક્યારે અને કેવી રીતે ચૂકવણી મળશે?",
        "a": [
          "ખેડૂત દ્વારા કામ પૂર્ણ થયાની પુષ્ટિ કર્યાના 24 કલાકની અંદર ચૂકવણી સીધા તમારા UPI ID અથવા બેંક ખાતામાં જાય છે. તમારે ક્યારેય રોકડ સંભાળવાની જરૂર નથી.",
          "જેવા તમે બુક થાઓ છો, PrithviX ખેડૂતની ચૂકવણીને એસ્ક્રોમાં રાખે છે. એકવાર બંને પક્ષો પુષ્ટિ કરે કે કામ થઈ ગયું છે, તે આપમેળે રિલીઝ થઈ જાય છે."
        ]
      },
      {
        "q": "PrithviX સત્તાવાર રીતે ક્યારે લોન્ચ થાય છે - અને અત્યારે શા માટે રજીસ્ટર કરવું?",
        "a": [
          "અમે પ્રી-લોન્ચમાં છીએ. દરેક જિલ્લામાં પ્રથમ 200 નોંધાયેલા વપરાશકર્તાઓ ફાઉન્ડિંગ મેમ્બર બને છે - તેમને મળે છે: પ્રાયોરિટી ઓનબોર્ડિંગ; ફાઉન્ડિંગ-મેમ્બર પ્રાઇસિંગ; અને નવી સુવિધાઓનો વહેલો એક્સેસ.",
          "રજીસ્ટર કરવામાં 60 સેકન્ડ લાગે છે. અમે તમારા સ્થાનની પુષ્ટિ કરવા અને કોઈપણ પ્રશ્નોના જવાબ આપવા માટે 1 કલાકની અંદર તમને કૉલ કરીએ છીએ."
        ]
      }
    ]
  },
  "floatingElements": {
    "whatsappHover": "અમારી સાથે ચેટ કરો",
    "stickyRegister": "મફત રજીસ્ટર કરો →"
  }
};

const pa = {
  "navbar": {
    "services": "ਸੇਵਾਵਾਂ",
    "aiAgent": "AI ਏਜੰਟ",
    "about": "ਸਾਡੇ ਬਾਰੇ",
    "contact": "ਸੰਪਰਕ ਕਰੋ",
    "registerInterest": "ਰਜਿਸਟਰ ਕਰੋ"
  },
  "footer": {
    "empowering": "ਤਕਨਾਲੋਜੀ ਦੇ ਨਾਲ ਭਾਰਤ ਦੇ ਖੇਤੀਬਾੜੀ ਈਕੋਸਿਸਟਮ ਨੂੰ ਮਜ਼ਬੂਤ ਬਣਾਉਣਾ। ਕਿਸਾਨਾਂ, ਡੀਲਰਾਂ ਅਤੇ ਪੂਰੀ ਖੇਤੀ ਮੁੱਲ ਲੜੀ ਲਈ ਬਣਾਇਆ ਗਿਆ।",
    "services": {
      "heading": "ਸੇਵਾਵਾਂ",
      "machineryRental": "ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ",
      "labourServices": "ਮਜ਼ਦੂਰੀ ਸੇਵਾਵਾਂ",
      "dealerErp": "ਡੀਲਰ ERP ਅਤੇ CRM",
      "onlineStore": "ਆਨਲਾਈਨ ਸਟੋਰ",
      "aiAgent": "AI ਏਜੰਟ"
    },
    "company": {
      "heading": "ਕੰਪਨੀ",
      "aboutUs": "ਸਾਡੇ ਬਾਰੇ",
      "ourMission": "ਸਾਡਾ ਮਿਸ਼ਨ",
      "careers": "ਕਰੀਅਰ",
      "blog": "ਬਲੌਗ",
      "press": "ਪ੍ਰੈੱਸ"
    },
    "contact": {
      "heading": "ਸੰਪਰਕ",
      "whatsappUs": "ਸਾਨੂੰ WhatsApp ਕਰੋ",
      "privacyPolicy": "ਗੋਪਨੀਯਤਾ ਨੀਤੀ",
      "termsOfUse": "ਵਰਤੋਂ ਦੀਆਂ ਸ਼ਰਤਾਂ"
    },
    "copyright": "© {year} PrithviX. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ। ਭਾਰਤ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ❤️ ਨਾਲ ਬਣਾਇਆ ਗਿਆ।"
  },
  "announcementBar": {
    "messages": [
      "ਸ਼ੁਰੂਆਤੀ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਖੁੱਲ੍ਹੀ ਹੈ - ਫਾਊਂਡਿੰਗ ਮੈਂਬਰ ਕੀਮਤਾਂ ਉਪਲਬਧ",
      "ਪਹਿਲ ਦੇ ਅਧਾਰ 'ਤੇ ਐਕਸੈਸ ਲਈ ਹੁਣੇ ਰਜਿਸਟਰ ਕਰੋ",
      "ਕੋਈ ਸਵਾਲ? ਸਾਨੂੰ WhatsApp ਕਰੋ:"
    ]
  },
  "hero": {
    "headline": [
      [{"text": "ਭਾਰਤ", "color": "amber"}, {"text": "ਲਈ", "color": "rabi"}],
      [{"text": "ਸਮਾਰਟ", "color": "rabi"}, {"text": "ਉਪਕਰਨ", "color": "rabi"}]
    ],
    "rotatingTexts": ["ਕਿਸਾਨਾਂ", "ਡੀਲਰਾਂ", "FPOs", "ਐਗਰੀ-ਬਿਜ਼ਨਸ"],
    "subHeadline": "PrithviX ਤਕਨਾਲੋਜੀ ਰਾਹੀਂ ਐਗਰੀ ਇਨਪੁਟ ਡੀਲਰਾਂ ਅਤੇ ਕਿਸਾਨਾਂ ਨੂੰ ਜੋੜਦਾ ਹੈ। ਇੱਕ ਪਲੇਟਫਾਰਮ। ਅਨੰਤ ਵਿਕਾਸ।",
    "ctaJoin": "ਪਲੇਟਫਾਰਮ ਨਾਲ ਜੁੜੋ",
    "ctaExplore": "ਸੇਵਾਵਾਂ ਦੇਖੋ",
    "stats": [
      { "label": "ਸੇਵਾਵਾਂ ਇੱਕ ਪਲੇਟਫਾਰਮ ਵਿੱਚ" },
      { "label": "ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਦਾ ਸਮਰਥਨ" },
      { "label": "AI ਲਗਾਤਾਰ ਕੰਮ ਕਰਦਾ ਹੈ", "static": "24/7" }
    ]
  },
  "marquee": [
    "ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ",
    "ਮਜ਼ਦੂਰੀ ਸੇਵਾਵਾਂ",
    "ਡੀਲਰ ERP ਅਤੇ CRM",
    "ਡੀਲਰਾਂ ਲਈ ਆਨਲਾਈਨ ਸਟੋਰ",
    "AI ਕਾਲਿੰਗ ਏਜੰਟ",
    "WhatsApp AI ਏਜੰਟ",
    "ਕ੍ਰੈਡਿਟ ਰਿਮਾਈਂਡਰ",
    "ਮਲਟੀ-ਡੀਲਰ ਪਲੇਟਫਾਰਮ"
  ],
  "about": {
    "pill": "ਅਸੀਂ ਕੌਣ ਹਾਂ",
    "heading": "ਖੇਤੀਬਾੜੀ ਅਤੇ",
    "headingHighlight": "ਤਕਨਾਲੋਜੀ ਦਾ ਸੁਮੇਲ",
    "sub": "PrithviX ਭਾਰਤ ਦੇ ਐਗਰੀ ਇਨਪੁਟ ਈਕੋਸਿਸਟਮ ਲਈ ਸੰਪੂਰਨ ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਬਣਾ ਰਿਹਾ ਹੈ - ਡੀਲਰ ਦੀ ਦੁਕਾਨ ਤੋਂ ਲੈ ਕੇ ਕਿਸਾਨ ਦੇ ਖੇਤ ਤੱਕ।",
    "badge": "ਭਾਰਤ ਦੇ ਖੇਤੀਬਾੜੀ ਈਕੋਸਿਸਟਮ ਲਈ ਬਣਾਇਆ ਗਿਆ",
    "badgeSub": "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਕਿਸਾਨਾਂ · ਡੀਲਰਾਂ · ਮਜ਼ਦੂਰਾਂ ਨੂੰ ਜੋੜਨਾ",
    "features": [
      { "title": "ਭਾਰਤ ਲਈ ਬਣਾਇਆ ਗਿਆ", "desc": "ਖਾਸ ਤੌਰ 'ਤੇ ਭਾਰਤ ਦੇ ਖੇਤੀ ਬਾਜ਼ਾਰਾਂ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ - ਸਥਾਨਕ ਭਾਸ਼ਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ, ਬੇਸਿਕ ਸਮਾਰਟਫੋਨ 'ਤੇ ਕੰਮ ਕਰਦਾ ਹੈ, ਅਤੇ ਪੇਂਡੂ ਵਪਾਰ ਮਾਡਲਾਂ ਨੂੰ ਸਮਝਦਾ ਹੈ।" },
      { "title": "AI ਮੁੱਖ ਤੌਰ 'ਤੇ", "desc": "ਇੰਟੈਲੀਜੈਂਟ ਆਟੋਮੇਸ਼ਨ ਕ੍ਰੈਡਿਟ ਫਾਲੋ-ਅਪਸ, ਗਾਹਕ ਸੰਚਾਰ ਅਤੇ ਵਪਾਰਕ ਸੂਝ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ - ਤਾਂ ਜੋ ਤੁਸੀਂ ਖੇਤੀ ਅਤੇ ਵਿਕਰੀ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰ ਸਕੋ, ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ 'ਤੇ ਨਹੀਂ।" },
      { "title": "ਇੱਕ ਈਕੋਸਿਸਟਮ", "desc": "ਕਿਸਾਨ, ਡੀਲਰ, ਉਪਕਰਨ ਮਾਲਕ ਅਤੇ ਮਜ਼ਦੂਰ ਸਾਰੇ ਇੱਕ ਪਲੇਟਫਾਰਮ 'ਤੇ ਜੁੜੇ ਹੋਏ ਹਨ - ਭਰੋਸੇ, ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਤਕਨਾਲੋਜੀ ਦੇ ਨਾਲ।" }
    ]
  },
  "services": {
    "pill": "ਅਸੀਂ ਕੀ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ",
    "heading": "ਚਾਰ ਸ਼ਕਤੀਸ਼ਾਲੀ",
    "headingHighlight": "ਸੇਵਾਵਾਂ",
    "sub": "ਖੇਤੀ ਈਕੋਸਿਸਟਮ ਦੀਆਂ ਲੋੜਾਂ ਇੱਕ ਛੱਤ ਹੇਠ।",
    "items": [
      { "number": "01 - ਕਿਰਾਇਆ", "title": "ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ", "desc": "ਕਿਸਾਨ ਦਿਨ ਦੇ ਹਿਸਾਬ ਨਾਲ ਟਰੈਕਟਰ, ਹਾਰਵੈਸਟਰ, ਸਪਰੇਅਰ ਅਤੇ ਹੋਰ ਉਪਕਰਣ ਕਿਰਾਏ 'ਤੇ ਲੈ ਸਕਦੇ ਹਨ। ਉਪਕਰਨ ਮਾਲਕ ਵਿਹਲੀ ਮਸ਼ੀਨਰੀ ਤੋਂ ਕਮਾਈ ਕਰਦੇ ਹਨ।", "features": ["ਮਿੰਟਾਂ ਵਿੱਚ ਆਪਣੇ ਉਪਕਰਣਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ", "ਦਿਨ, ਹਫ਼ਤੇ ਜਾਂ ਸੀਜ਼ਨ ਦੇ ਹਿਸਾਬ ਨਾਲ ਕਿਰਾਏ 'ਤੇ ਦਿਓ", "ਪ੍ਰਮਾਣਿਤ ਉਪਕਰਣ ਮਾਲਕ", "ਸਥਾਨ-ਅਧਾਰਿਤ ਖੋਜ", "ਸੁਰੱਖਿਅਤ ਭੁਗਤਾਨ ਅਤੇ ਬੁਕਿੰਗ"], "linkText": "ਆਪਣੇ ਉਪਕਰਣਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ" },
      { "number": "02 - ਮਜ਼ਦੂਰੀ", "title": "ਮਜ਼ਦੂਰੀ ਸੇਵਾਵਾਂ", "desc": "ਬਿਜਾਈ, ਵਾਢੀ ਜਾਂ ਖੇਤ ਦੇ ਕੰਮ ਲਈ ਮਜ਼ਦੂਰਾਂ ਦੀ ਲੋੜ ਹੈ? PrithviX ਪ੍ਰਮਾਣਿਤ ਖੇਤ ਮਜ਼ਦੂਰਾਂ ਨੂੰ ਸਿੱਧੇ ਉਨ੍ਹਾਂ ਕਿਸਾਨਾਂ ਨਾਲ ਜੋੜਦਾ ਹੈ ਜਿਨ੍ਹਾਂ ਨੂੰ ਉਨ੍ਹਾਂ ਦੀ ਲੋੜ ਹੈ।", "features": ["ਪ੍ਰਮਾਣਿਤ ਹੁਨਰਮੰਦ ਖੇਤ ਮਜ਼ਦੂਰ", "ਦਿਨ ਜਾਂ ਸੀਜ਼ਨ ਦੇ ਹਿਸਾਬ ਨਾਲ ਬੁੱਕ ਕਰੋ", "ਪਾਰਦਰਸ਼ੀ ਕੀਮਤਾਂ", "ਰੇਟ ਕੀਤੇ ਅਤੇ ਰਿਵਿਊ ਕੀਤੇ ਕਾਮੇ", "ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਉਪਲਬਧ"], "linkText": "ਆਪਣੇ ਨੇੜੇ ਮਜ਼ਦੂਰ ਲੱਭੋ" },
      { "number": "03 - ERP ਅਤੇ CRM", "title": "ਡੀਲਰ ERP ਅਤੇ CRM", "desc": "ਐਗਰੀ ਇਨਪੁਟ ਡੀਲਰਾਂ ਲਈ ਸੰਪੂਰਨ ਵਪਾਰਕ ਪ੍ਰਬੰਧਨ। ਇਨਵੈਂਟਰੀ ਟ੍ਰੈਕ ਕਰੋ, ਕ੍ਰੈਡਿਟ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ, ਕਿਸਾਨ ਸਬੰਧਾਂ ਨੂੰ ਸੰਭਾਲੋ, ਅਤੇ ਭੁਗਤਾਨ ਫਾਲੋ-ਅਪਸ ਨੂੰ ਸਵੈਚਲਿਤ ਕਰੋ - ਸਭ ਕੁਝ ਇੱਕ ਥਾਂ 'ਤੇ।", "features": ["ਕਿਸਾਨ CRM ਅਤੇ QR ਲੁੱਕਅਪ", "ਵਿਕਰੀ, ਬਿਲਿੰਗ ਅਤੇ GST ਚਲਾਨ", "ਉਧਾਰ ਪ੍ਰਬੰਧਨ", "ਇਨਵੈਂਟਰੀ ਅਤੇ ਬੈਚ ਟ੍ਰੈਕਿੰਗ", "ਰੋਜ਼ਾਨਾ ਕਲੋਜ਼ ਅਤੇ ਐਨਾਲਿਟਿਕਸ", "ਕਾਨੂੰਨੀ ਪਾਲਣਾ ਰਜਿਸਟਰ", "WhatsApp ਆਰਡਰ ਅਤੇ ਬ੍ਰਾਡਕਾਸਟ", "AI ਫਸਲ ਸਲਾਹਕਾਰ", "ਯੋਜਨਾਵਾਂ ਅਤੇ ਫਸਲ ਕੈਲੰਡਰ", "ਸਟਾਫ ਦੀਆਂ ਭੂਮਿਕਾਵਾਂ ਅਤੇ ਇਜਾਜ਼ਤਾਂ", "ਖੇਤਰ-ਵਾਰ ਵਿਕਰੀ ਰਿਪੋਰਟਾਂ", "ਪੂਰਾ Tally-ਸਟਾਈਲ ਅਕਾਊਂਟਿੰਗ", "ਖਰੀਦ, ਬੈਂਕਿੰਗ ਅਤੇ ਹੱਲ", "ਇੱਕ ਸਾਂਝਾ ਡਾਟਾਬੇਸ - ਕੋਈ ਡਬਲ ਐਂਟਰੀ ਨਹੀਂ"], "linkText": "ਆਪਣਾ ਕਾਰੋਬਾਰ ਸੰਭਾਲੋ" },
      { "number": "04 - ਈ-ਕਾਮਰਸ", "title": "ਡੀਲਰਾਂ ਲਈ ਆਨਲਾਈਨ ਸਟੋਰ", "desc": "ਐਗਰੀ ਇਨਪੁਟ ਡੀਲਰ ਮਿੰਟਾਂ ਵਿੱਚ ਆਪਣਾ ਖੁਦ ਦਾ ਡਿਜੀਟਲ ਸਟੋਰਫਰੰਟ ਲਾਂਚ ਕਰ ਸਕਦੇ ਹਨ। ਬੀਜ, ਖਾਦ, ਕੀਟਨਾਸ਼ਕ ਅਤੇ ਉਪਕਰਣ ਆਨਲਾਈਨ ਵੇਚੋ - ਆਪਣੇ ਸਥਾਨਕ ਖੇਤਰ ਤੋਂ ਬਾਹਰ ਦੇ ਕਿਸਾਨਾਂ ਤੱਕ ਪਹੁੰਚੋ।", "features": ["ਤੁਹਾਡਾ ਆਪਣਾ ਬ੍ਰਾਂਡਡ ਆਨਲਾਈਨ ਸਟੋਰ", "ਉਤਪਾਦ ਕੈਟਾਲਾਗ ਪ੍ਰਬੰਧਨ", "ਆਨਲਾਈਨ ਆਰਡਰ ਅਤੇ ਭੁਗਤਾਨ", "ਡਿਲਿਵਰੀ ਟਰੈਕਿੰਗ", "WhatsApp ਆਰਡਰ ਸੂਚਨਾਵਾਂ"], "linkText": "ਆਪਣਾ ਸਟੋਰ ਲਾਂਚ ਕਰੋ" }
    ]
  },
  "dashboardPreview": {
    "pill": "ਇਸਨੂੰ ਕੰਮ ਕਰਦੇ ਦੇਖੋ",
    "heading": "ਡੀਲਰ",
    "headingHighlight": "ਡੈਸ਼ਬੋਰਡ",
    "sub": "ਇੱਕ ਡੀਲਰ ਨੂੰ ਜੋ ਵੀ ਚਾਹੀਦਾ ਹੈ ਉਹ ਇੱਕ ਸਕ੍ਰੀਨ ਵਿੱਚ। ਬਕਾਇਆ ਕ੍ਰੈਡਿਟ, ਕਿਸਾਨ ਰਿਕਾਰਡ, ਇਨਵੈਂਟਰੀ ਪੱਧਰ, ਅਤੇ AI ਕਾਲ ਸਥਿਤੀ - ਇੱਕ ਨਜ਼ਰ ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ। ਕਿਸੇ ਸਿਖਲਾਈ ਦੀ ਲੋੜ ਨਹੀਂ।",
    "callouts": [
      { "title": "ਇੱਕ-ਕਲਿੱਕ ਕ੍ਰੈਡਿਟ ਰਿਮਾਈਂਡਰ", "desc": "ਇੱਕ ਬਟਨ ਨਾਲ ਸਾਰੇ ਬਕਾਇਆ ਕਿਸਾਨਾਂ ਨੂੰ ਭੁਗਤਾਨ ਰਿਮਾਈਂਡਰ ਭੇਜੋ।" },
      { "title": "ਲਾਈਵ AI ਏਜੰਟ ਸਥਿਤੀ", "desc": "ਦੇਖੋ ਕਿ ਅੱਜ ਕਿੰਨੀਆਂ ਕਾਲਾਂ ਪੂਰੀਆਂ ਹੋਈਆਂ ਅਤੇ ਕਿੰਨਿਆਂ ਦਾ ਜਵਾਬ ਦਿੱਤਾ ਗਿਆ।" },
      { "title": "ਸੰਪੂਰਨ ਕਿਸਾਨ ਖਾਤਾ", "desc": "ਹਰ ਖਰੀਦ, ਭੁਗਤਾਨ, ਅਤੇ ਬਕਾਇਆ ਇੱਕ ਸਪਸ਼ਟ ਦ੍ਰਿਸ਼ ਵਿੱਚ।" },
      { "title": "ਘੱਟ ਸਟਾਕ ਅਲਰਟ", "desc": "ਬਿਜਾਈ ਦੇ ਸੀਜ਼ਨ ਤੋਂ ਪਹਿਲਾਂ ਘੱਟ ਚੱਲ ਰਹੇ ਉਤਪਾਦਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਫਲੈਗ ਕਰਦਾ ਹੈ।" }
    ],
    "link": "ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੇਖੋ →"
  },
  "aiAgent": {
    "headingPrefix": "ਤੁਹਾਡਾ ਕਾਰੋਬਾਰ",
    "headingSuffix": "ਆਟੋਪਾਇਲਟ 'ਤੇ ਚੱਲਦਾ ਹੈ",
    "sub": "PrithviX ਦੇ AI ਏਜੰਟ 24/7 ਤੁਹਾਡੇ ਸੰਚਾਰ ਨੂੰ ਸੰਭਾਲਦੇ ਹਨ - ਗਾਹਕਾਂ ਨੂੰ ਕਾਲ ਕਰਨਾ, WhatsApp ਰਿਮਾਈਂਡਰ ਭੇਜਣਾ, ਅਤੇ ਜਾਣਕਾਰੀ ਇਕੱਠੀ ਕਰਨਾ। ਕਿਸੇ ਮਨੁੱਖੀ ਆਪਰੇਟਰ ਦੀ ਲੋੜ ਨਹੀਂ।",
    "cta": "ਅਰਲੀ ਐਕਸੈਸ ਪ੍ਰਾਪਤ ਕਰੋ",
    "quote": "“ਭਾਰਤ ਦੇ ਡੀਲਰਾਂ ਅਤੇ ਕਿਸਾਨਾਂ ਨੂੰ ਸਮਰੱਥ ਅਤੇ ਮਜ਼ਬੂਤ ਬਣਾਉਣ ਦਾ ਇੱਕ ਵਿਜ਼ਨ।”",
    "quoteAuthor": "ਸੰਸਥਾਪਕ",
    "quoteCompany": "PrithviX",
    "cards": [
      { "title": "AI ਵਾਇਸ ਕਾਲਿੰਗ ਏਜੰਟ", "desc": "ਕ੍ਰੈਡਿਟ ਮੁੜ-ਭੁਗਤਾਨ ਰਿਮਾਈਂਡਰ, ਫਾਲੋ-ਅਪਸ ਅਤੇ ਆਰਡਰ ਦੀ ਪੁਸ਼ਟੀ ਲਈ ਕਿਸਾਨਾਂ ਨੂੰ ਆਪਣੇ ਆਪ ਕਾਲ ਕਰਦਾ ਹੈ। ਉਨ੍ਹਾਂ ਦੀ ਸਥਾਨਕ ਭਾਸ਼ਾ ਵਿੱਚ ਬੋਲਦਾ ਹੈ। ਮਨੁੱਖ ਤੋਂ ਬਿਨਾਂ 24/7 ਕੰਮ ਕਰਦਾ ਹੈ।" },
      { "title": "WhatsApp AI ਏਜੰਟ", "desc": "ਇੱਕ AI ਏਜੰਟ ਇੱਕੋ ਸਮੇਂ ਕਈ ਡੀਲਰਾਂ ਲਈ ਸੈਂਕੜੇ ਗਾਹਕਾਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ। ਰਿਮਾਈਂਡਰ ਭੇਜਦਾ ਹੈ, ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿੰਦਾ ਹੈ, ਡਾਟਾ ਇਕੱਠਾ ਕਰਦਾ ਹੈ - ਸਭ ਕੁਝ WhatsApp 'ਤੇ।" },
      { "title": "ਬਹੁ-ਭਾਸ਼ਾਈ ਸਹਿਯੋਗ", "desc": "ਹਿੰਦੀ, ਗੁਜਰਾਤੀ, ਪੰਜਾਬੀ, ਮਰਾਠੀ, ਤੇਲਗੂ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਬੋਲਦਾ ਅਤੇ ਸਮਝਦਾ ਹੈ। ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਅਤੇ ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਵਿਚਕਾਰ ਕੋਈ ਭਾਸ਼ਾ ਦੀ ਰੁਕਾਵਟ ਨਹੀਂ।" },
      { "title": "ਸਮਾਰਟ ਡਾਟਾ ਕਲੈਕਸ਼ਨ", "desc": "AI ਸਹੀ ਸਵਾਲ ਪੁੱਛਦਾ ਹੈ, ਜਵਾਬ ਰਿਕਾਰਡ ਕਰਦਾ ਹੈ, ਅਤੇ ਆਪਣੇ ਆਪ ਤੁਹਾਡੇ CRM ਨੂੰ ਅਪਡੇਟ ਕਰਦਾ ਹੈ। ਹਰ ਕਾਲ ਤੋਂ ਬਾਅਦ ਕੋਈ ਮੈਨੂਅਲ ਡਾਟਾ ਐਂਟਰੀ ਨਹੀਂ।" }
    ]
  },
  "whoFor": {
    "heading": "ਕਿਸਾਨਾਂ ਅਤੇ ਡੀਲਰਾਂ ਲਈ ਬਣਾਇਆ ਗਿਆ",
    "cards": [
      { "title": "ਕਿਸਾਨਾਂ ਲਈ", "sub": "ਸਮਾਰਟ ਖੇਤੀ ਕਰਨ ਲਈ ਲੋੜੀਂਦੀ ਹਰ ਚੀਜ਼ ਤੱਕ ਪਹੁੰਚ ਕਰੋ।", "items": ["ਆਪਣੇ ਨੇੜੇ ਟਰੈਕਟਰ ਅਤੇ ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ ਲਓ", "ਮੰਗ 'ਤੇ ਹੁਨਰਮੰਦ ਖੇਤ ਮਜ਼ਦੂਰ ਕਿਰਾਏ 'ਤੇ ਲਓ", "ਭਰੋਸੇਮੰਦ ਡੀਲਰਾਂ ਤੋਂ ਆਨਲਾਈਨ ਐਗਰੀ ਇਨਪੁਟ ਖਰੀਦੋ", "AI-ਸੰਚਾਲਿਤ ਫਸਲ ਅਤੇ ਸੇਵਾ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ", "ਇੱਕ ਐਪ ਵਿੱਚ ਆਪਣੇ ਆਰਡਰ ਅਤੇ ਬੁਕਿੰਗ ਨੂੰ ਟ੍ਰੈਕ ਕਰੋ", "ਡਿਜੀਟਲ ਤੌਰ 'ਤੇ ਭੁਗਤਾਨ ਕਰੋ - ਸੁਰੱਖਿਅਤ ਅਤੇ ਪਾਰਦਰਸ਼ੀ"], "cta": "ਅਰਲੀ ਐਕਸੈਸ ਪ੍ਰਾਪਤ ਕਰੋ →" },
      { "title": "ਡੀਲਰਾਂ ਲਈ", "sub": "ਆਪਣੇ ਐਗਰੀ ਇਨਪੁਟ ਕਾਰੋਬਾਰ ਦਾ ਡਿਜੀਟਲ ਤੌਰ 'ਤੇ ਪ੍ਰਬੰਧਨ ਕਰੋ।", "items": ["ਤੁਹਾਡੀ ਦੁਕਾਨ ਲਈ ਪੂਰਾ ERP ਅਤੇ CRM", "ਆਪਣਾ ਖੁਦ ਦਾ ਆਨਲਾਈਨ ਸਟੋਰ ਲਾਂਚ ਕਰੋ", "ਕ੍ਰੈਡਿਟ ਰਿਕਵਰੀ ਲਈ AI ਕਿਸਾਨਾਂ ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ", "WhatsApp ਏਜੰਟ ਗਾਹਕ ਦੇ ਸਵਾਲਾਂ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ", "ਇਨਵੈਂਟਰੀ, ਵਿਕਰੀ ਅਤੇ ਲੇਜ਼ਰ ਟ੍ਰੈਕ ਕਰੋ", "ਆਪਣੇ ਪੂਰੇ ਜ਼ਿਲ੍ਹੇ ਦੇ ਕਿਸਾਨਾਂ ਤੱਕ ਪਹੁੰਚੋ"], "cta": "ਅਰਲੀ ਐਕਸੈਸ ਪ੍ਰਾਪਤ ਕਰੋ →" }
    ]
  },
  "howItWorks": {
    "pill": "ਸਧਾਰਨ ਪ੍ਰਕਿਰਿਆ",
    "heading": "PrithviX ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",
    "steps": [
      { "n": 1, "title": "ਰਜਿਸਟਰ ਕਰੋ", "desc": "2 ਮਿੰਟਾਂ ਤੋਂ ਘੱਟ ਸਮੇਂ ਵਿੱਚ ਕਿਸਾਨ, ਡੀਲਰ, ਉਪਕਰਨ ਮਾਲਕ ਜਾਂ ਮਜ਼ਦੂਰ ਵਜੋਂ ਸਾਈਨ ਅੱਪ ਕਰੋ।" },
      { "n": 2, "title": "ਪ੍ਰੋਫਾਈਲ ਸੈੱਟ ਕਰੋ", "desc": "ਆਪਣੇ ਉਪਕਰਣ, ਸੇਵਾਵਾਂ ਜਾਂ ਉਤਪਾਦਾਂ ਦੀ ਸੂਚੀ ਬਣਾਓ। ਡੀਲਰ ਆਪਣਾ ਸਟੋਰ ਸੈੱਟ ਕਰਦੇ ਹਨ ਅਤੇ ਆਪਣਾ ਕਿਸਾਨ ਡਾਟਾਬੇਸ ਆਯਾਤ ਕਰਦੇ ਹਨ।" },
      { "n": 3, "title": "ਕਨੈਕਟ ਕਰੋ", "desc": "ਕਿਸਾਨ ਉਪਕਰਨ, ਮਜ਼ਦੂਰੀ ਅਤੇ ਸਪਲਾਈ ਲੱਭਦੇ ਅਤੇ ਬੁੱਕ ਕਰਦੇ ਹਨ। ਡੀਲਰ AI ਟੂਲਸ ਨਾਲ ਗਾਹਕਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਦੇ ਹਨ।" },
      { "n": 4, "title": "ਵਿਕਾਸ ਕਰੋ", "desc": "AI ਆਪਣੇ ਆਪ ਫਾਲੋ-ਅਪਸ, ਰਿਮਾਈਂਡਰ ਅਤੇ ਸੰਚਾਰ ਨੂੰ ਸੰਭਾਲਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਆਪਣੇ ਕੰਮ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹੋ।" }
    ]
  },
  "socialProof": {
    "stats": [
      "ਰਜਿਸਟਰਡ ਕਿਸਾਨ ਅਤੇ ਡੀਲਰ",
      "ਕਵਰ ਕੀਤੇ ਜ਼ਿਲ੍ਹੇ",
      "ਸੇਵਾਵਾਂ ਸ਼ੁਰੂ ਹੋ ਰਹੀਆਂ ਹਨ"
    ],
    "sub": "ਭਾਰਤ ਵਿੱਚ ਖੇਤੀਬਾੜੀ ਨੂੰ ਡਿਜੀਟਲ ਬਣਾਉਣ ਵਾਲੇ ਕਿਸਾਨਾਂ ਅਤੇ ਡੀਲਰਾਂ ਦੀ ਪਹਿਲੀ ਲਹਿਰ ਦਾ ਹਿੱਸਾ ਬਣੋ।",
    "ready": "ਤਿਆਰ"
  },
  "registerForm": {
    "pill": "ਸਭ ਤੋਂ ਪਹਿਲਾਂ ਬਣੋ",
    "headingPrefix": "PrithviX ਨਾਲ",
    "headingSuffix": "ਜਲਦੀ ਜੁੜੋ",
    "sub": "ਅਸੀਂ ਆਪਣੇ ਪਹਿਲੇ ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ ਆਨਬੋਰਡ ਕਰ ਰਹੇ ਹਾਂ। ਅੱਜ ਹੀ ਆਪਣੀ ਦਿਲਚਸਪੀ ਦਰਜ ਕਰੋ ਅਤੇ ਜਦੋਂ ਅਸੀਂ ਤੁਹਾਡੇ ਖੇਤਰ ਵਿੱਚ ਲਾਂਚ ਕਰਾਂਗੇ ਤਾਂ ਪਹਿਲ ਦੇ ਅਧਾਰ 'ਤੇ ਐਕਸੈਸ ਪ੍ਰਾਪਤ ਕਰੋ।",
    "benefits": ["ਰਜਿਸਟਰ ਕਰਨ ਲਈ ਮੁਫਤ", "ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਤੱਕ ਜਲਦੀ ਪਹੁੰਚ", "ਸਮਰਪਿਤ ਆਨਬੋਰਡਿੰਗ ਸਹਾਇਤਾ", "ਫਾਊਂਡਿੰਗ-ਮੈਂਬਰ ਕੀਮਤਾਂ, ਸਥਾਈ"],
    "formHeading": "ਆਪਣੀ ਦਿਲਚਸਪੀ ਦਰਜ ਕਰੋ",
    "labels": {
      "name": "ਪੂਰਾ ਨਾਮ",
      "namePlaceholder": "ਤੁਹਾਡਾ ਨਾਮ",
      "phone": "ਮੋਬਾਈਲ ਨੰਬਰ",
      "phonePlaceholder": "+91 XXXXX XXXXX",
      "district": "ਜ਼ਿਲ੍ਹਾ / ਸ਼ਹਿਰ",
      "districtPlaceholder": "ਉਦਾਹਰਣ ਵਜੋਂ ਅਹਿਮਦਾਬਾਦ, ਸੂਰਤ, ਨਾਸਿਕ",
      "role": "ਮੈਂ ਇੱਕ...",
      "roleOptions": ["ਕਿਸਾਨ", "ਐਗਰੀ ਇਨਪੁਟ ਡੀਲਰ", "ਉਪਕਰਨ ਮਾਲਕ", "ਮਜ਼ਦੂਰ", "ਹੋਰ"],
      "service": "ਇਸ ਵਿੱਚ ਦਿਲਚਸਪੀ ਹੈ...",
      "serviceOptions": ["ਮਸ਼ੀਨਰੀ ਕਿਰਾਏ 'ਤੇ", "ਮਜ਼ਦੂਰੀ ਸੇਵਾਵਾਂ", "ਡੀਲਰ ERP ਅਤੇ CRM", "ਆਨਲਾਈਨ ਸਟੋਰ", "AI ਕਾਲਿੰਗ ਅਤੇ WhatsApp ਏਜੰਟ", "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ"],
      "selectPlaceholder": "ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ"
    },
    "errors": {
      "name": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਦਰਜ ਕਰੋ",
      "phone": "ਇੱਕ ਵੈਧ 10-ਅੰਕਾਂ ਵਾਲਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
      "district": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਜ਼ਿਲ੍ਹਾ ਦਰਜ ਕਰੋ",
      "role": "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ",
      "service": "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ"
    },
    "alreadyRegistered": "{count} ਕਿਸਾਨ ਅਤੇ ਡੀਲਰ ਪਹਿਲਾਂ ਹੀ ਰਜਿਸਟਰਡ ਹਨ।",
    "submit": "ਦਿਲਚਸਪੀ ਜਮ੍ਹਾਂ ਕਰੋ →",
    "sending": "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    "errorMsg": "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ ਜਾਂ ",
    "errorLink": "ਸਾਨੂੰ ਸਿੱਧਾ WhatsApp ਕਰੋ",
    "privacyMsg": "ਜੁੜਨ ਲਈ ਮੁਫ਼ਤ। ਕੋਈ ਸਪੈਮ ਨਹੀਂ। ਅਸੀਂ 1 ਘੰਟੇ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
    "successHeading": "ਤੁਸੀਂ ਸੂਚੀ ਵਿੱਚ ਹੋ!",
    "successSub": "ਅਸੀਂ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ। ਸਾਡੇ ਵੱਲੋਂ WhatsApp ਸੰਦੇਸ਼ ਦੀ ਉਮੀਦ ਕਰੋ।",
    "successBtn": "ਸਾਨੂੰ ਹੁਣੇ ਸੰਦੇਸ਼ ਭੇਜੋ"
  },
  "faq": {
    "pill": "ਆਮ ਸਵਾਲ",
    "heading": "ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ",
    "items": [
      {
        "q": "ਕੀ ਰਜਿਸਟਰ ਕਰਨਾ ਮੁਫ਼ਤ ਹੈ? PrithviX ਮੇਰੇ ਤੋਂ ਕੀ ਚਾਰਜ ਲਵੇਗਾ?",
        "a": [
          "ਰਜਿਸਟਰ ਕਰਨਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫਤ ਹੈ - ਕਿਸਾਨਾਂ, ਡੀਲਰਾਂ, ਉਪਕਰਣ ਮਾਲਕਾਂ ਅਤੇ ਮਜ਼ਦੂਰਾਂ ਲਈ। ਕੋਈ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਨਹੀਂ। ਕੋਈ ਲੁਕਿਆ ਹੋਇਆ ਸੈੱਟਅੱਪ ਚਾਰਜ ਨਹੀਂ।",
          "PrithviX ਸਿਰਫ਼ ਉਦੋਂ ਹੀ ਕਮਾਉਂਦਾ ਹੈ ਜਦੋਂ ਤੁਸੀਂ ਕਮਾਉਂਦੇ ਹੋ। ਅਸੀਂ ਪੂਰੀ ਹੋਈ ਉਪਕਰਣ ਕਿਰਾਏ ਦੀ ਬੁਕਿੰਗ 'ਤੇ 12% ਪਲੇਟਫਾਰਮ ਫੀਸ ਅਤੇ ਪੂਰੀ ਹੋਈ ਮਜ਼ਦੂਰੀ ਬੁਕਿੰਗ 'ਤੇ 10% ਚਾਰਜ ਲੈਂਦੇ ਹਾਂ।",
          "ਡੀਲਰ ERP ਅਤੇ CRM ₹499/ਮਹੀਨਾ ਤੋਂ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ - ਜਿਸ ਵਿੱਚ ਇਨਵੈਂਟਰੀ, ਕ੍ਰੈਡਿਟ ਪ੍ਰਬੰਧਨ, ਬਿਲਿੰਗ ਅਤੇ AI-ਸੰਚਾਲਿਤ ਰਿਮਾਈਂਡਰ ਸ਼ਾਮਲ ਹਨ। ਕਿਸੇ ਵੀ ਸਮੇਂ ਰੱਦ ਕਰੋ।"
        ]
      },
      {
        "q": "ਕੀ ਮੇਰਾ ਡਾਟਾ ਸੁਰੱਖਿਅਤ ਹੈ? ਮੇਰੀ ਕਿਸਾਨ ਗਾਹਕ ਸੂਚੀ ਕੌਣ ਦੇਖ ਸਕਦਾ ਹੈ?",
        "a": [
          "ਤੁਹਾਡੀ ਕਿਸਾਨ ਗਾਹਕ ਸੂਚੀ ਤੁਹਾਡੀ ਹੈ। ਸਿਰਫ਼ ਤੁਸੀਂ ਹੀ ਇਸਨੂੰ ਦੇਖ ਸਕਦੇ ਹੋ - ਹੋਰ ਡੀਲਰ ਨਹੀਂ, ਸਾਡੀ ਸੇਲਜ਼ ਟੀਮ ਨਹੀਂ। ਅਸੀਂ ਕਦੇ ਵੀ ਤੁਹਾਡਾ ਡਾਟਾ ਸਾਂਝਾ ਨਹੀਂ ਕਰਦੇ।",
          "ਸਾਰਾ ਡਾਟਾ ਭਾਰਤੀ ਸਰਵਰਾਂ 'ਤੇ ਐਨਕ੍ਰਿਪਟਡ ਸਟੋਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਜੇਕਰ ਤੁਸੀਂ ਕਦੇ ਆਪਣਾ ਖਾਤਾ ਬੰਦ ਕਰਦੇ ਹੋ, ਤਾਂ ਅਸੀਂ ਬੇਨਤੀ 'ਤੇ 30 ਦਿਨਾਂ ਦੇ ਅੰਦਰ ਤੁਹਾਡਾ ਡਾਟਾ ਸਥਾਈ ਤੌਰ 'ਤੇ ਮਿਟਾ ਦਿੰਦੇ ਹਾਂ।"
        ]
      },
      {
        "q": "PrithviX ਇਸ ਸਮੇਂ ਕਿੱਥੇ ਉਪਲਬਧ ਹੈ?",
        "a": [
          "ਅਸੀਂ ਪਹਿਲਾਂ ਗੁਜਰਾਤ ਅਤੇ ਰਾਜਸਥਾਨ ਵਿੱਚ ਲਾਂਚ ਕਰ ਰਹੇ ਹਾਂ। ਉਸ ਤੋਂ ਬਾਅਦ ਮਹਾਰਾਸ਼ਟਰ ਅਤੇ ਮੱਧ ਪ੍ਰਦੇਸ਼।",
          "ਜੇਕਰ ਤੁਹਾਡਾ ਜ਼ਿਲ੍ਹਾ ਸੂਚੀਬੱਧ ਨਹੀਂ ਹੈ, ਤਾਂ ਵੀ ਰਜਿਸਟਰ ਕਰੋ। ਅਸੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਦੇ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਤੁਹਾਡੇ ਖੇਤਰ ਦੀ ਲਾਂਚ ਮਿਤੀ ਦੀ ਨਿੱਜੀ ਤੌਰ 'ਤੇ ਪੁਸ਼ਟੀ ਕਰਦੇ ਹਾਂ।"
        ]
      },
      {
        "q": "ਮੈਂ ਪਹਿਲਾਂ ਹੀ Tally ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹਾਂ। ਕੀ ਮੈਂ ਆਪਣਾ ਡੀਲਰ ਡਾਟਾ PrithviX ਵਿੱਚ ਭੇਜ ਸਕਦਾ ਹਾਂ?",
        "a": [
          "ਹਾਂ। Tally ਤੋਂ ਆਪਣਾ ਡਾਟਾ ਐਕਸਲ ਦੇ ਰੂਪ ਵਿੱਚ ਨਿਰਯਾਤ ਕਰੋ ਅਤੇ ਅਸੀਂ ਇਸਨੂੰ PrithviX ਵਿੱਚ ਆਯਾਤ ਕਰਨ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਾਂਗੇ। ਸਾਡੀ ਟੀਮ ਹਰ ਨਵੇਂ ਡੀਲਰ ਦੀ ਮਦਦ ਕਰਦੀ ਹੈ।",
          "PrithviX Tally ਦਾ ਬਦਲ ਨਹੀਂ ਹੈ - ਇਹ ਖਾਸ ਤੌਰ 'ਤੇ ਐਗਰੀ ਇਨਪੁਟ ਡੀਲਰਾਂ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ ਅਤੇ ਉਹ ਕੰਮ ਕਰਦਾ ਹੈ ਜੋ Tally ਨਹੀਂ ਕਰ ਸਕਦਾ: ਫਸਲ ਕੈਲੰਡਰ ਦੇ ਨਾਲ ਕਿਸਾਨ CRM, AI ਕਾਲਿੰਗ, WhatsApp ਆਰਡਰ ਪ੍ਰਬੰਧਨ।"
        ]
      },
      {
        "q": "ਕੀ AI ਕਾਲਿੰਗ ਏਜੰਟ ਸੱਚਮੁੱਚ ਹਿੰਦੀ ਅਤੇ ਪੰਜਾਬੀ ਬੋਲਦਾ ਹੈ?",
        "a": [
          "AI ਹਿੰਦੀ, ਪੰਜਾਬੀ, ਗੁਜਰਾਤੀ, ਮਰਾਠੀ, ਤੇਲਗੂ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਬੋਲਦਾ ਅਤੇ ਸਮਝਦਾ ਹੈ। ਜੇਕਰ ਕੋਈ ਕਿਸਾਨ ਪੰਜਾਬੀ ਵਿੱਚ ਸ਼ੁਰੂ ਕਰਦਾ ਹੈ ਅਤੇ ਵਿਚਕਾਰ ਹਿੰਦੀ ਵਿੱਚ ਬਦਲਦਾ ਹੈ, ਤਾਂ ਏਜੰਟ ਆਸਾਨੀ ਨਾਲ ਸਮਝ ਲੈਂਦਾ ਹੈ।",
          "ਏਜੰਟ ਕ੍ਰੈਡਿਟ ਭੁਗਤਾਨ ਰਿਮਾਈਂਡਰ ਅਤੇ ਆਰਡਰ ਦੀ ਪੁਸ਼ਟੀ ਲਈ ਤੁਹਾਡੀ ਤਰਫੋਂ ਕਿਸਾਨਾਂ ਨੂੰ ਕਾਲ ਕਰਦਾ ਹੈ। ਹਰ ਕਾਲ ਰਿਕਾਰਡ ਕੀਤੀ ਜਾਂਦੀ ਹੈ ਅਤੇ ਤੁਹਾਡੇ ਡੈਸ਼ਬੋਰਡ ਵਿੱਚ ਦਿਖਾਈ ਦਿੰਦੀ ਹੈ।"
        ]
      },
      {
        "q": "ਜੇਕਰ ਕਿਰਾਏ ਦੇ ਦੌਰਾਨ ਉਪਕਰਣ ਟੁੱਟ ਜਾਂਦਾ ਹੈ - ਤਾਂ ਕੌਣ ਜ਼ਿੰਮੇਵਾਰ ਹੈ?",
        "a": [
          "ਉਪਕਰਨ ਮਾਲਕ ਫੋਟੋਆਂ ਅਤੇ ਪ੍ਰਮਾਣਿਤ ਸਥਿਤੀ ਰੇਟਿੰਗ ਦੇ ਨਾਲ ਆਪਣੀ ਮਸ਼ੀਨਰੀ ਦੀ ਸੂਚੀ ਬਣਾਉਂਦੇ ਹਨ। ਕਿਰਾਏਦਾਰ ਬੁਕਿੰਗ ਸਮੇਂ ਇੱਕ ਵਾਪਸੀਯੋਗ ਸੁਰੱਖਿਆ ਜਮ੍ਹਾਂ ਰਕਮ ਅਦਾ ਕਰਦੇ ਹਨ - ਜੋ PrithviX ਕੋਲ ਰਹਿੰਦੀ ਹੈ।",
          "ਜੇਕਰ ਉਪਕਰਣ ਫੇਲ੍ਹ ਹੋ ਜਾਂਦਾ ਹੈ: ਮਾਲਕ ਨੂੰ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਇੱਕ ਕੰਮ ਕਰਨ ਵਾਲਾ ਬਦਲ ਪ੍ਰਦਾਨ ਕਰਨਾ ਪਵੇਗਾ ਜਾਂ ਰਿਫੰਡ ਜਾਰੀ ਕਰਨਾ ਪਵੇਗਾ। ਸਾਰੇ ਵਿਵਾਦਾਂ ਨੂੰ ਸਾਡੀ ਟੀਮ ਦੁਆਰਾ 48 ਘੰਟਿਆਂ ਵਿੱਚ ਹੱਲ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।"
        ]
      },
      {
        "q": "ਮੈਂ ਇੱਕ ਖੇਤ ਮਜ਼ਦੂਰ ਹਾਂ। ਮੈਨੂੰ ਭੁਗਤਾਨ ਕਿਵੇਂ ਅਤੇ ਕਦੋਂ ਮਿਲੇਗਾ?",
        "a": [
          "ਕਿਸਾਨ ਦੁਆਰਾ ਕੰਮ ਪੂਰਾ ਹੋਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਦੇ 24 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ ਭੁਗਤਾਨ ਸਿੱਧਾ ਤੁਹਾਡੇ UPI ID ਜਾਂ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਜਾਂਦਾ ਹੈ। ਤੁਹਾਨੂੰ ਕਦੇ ਵੀ ਨਕਦੀ ਨਹੀਂ ਸੰਭਾਲਣੀ ਪੈਂਦੀ।",
          "ਜਿਵੇਂ ਹੀ ਤੁਸੀਂ ਬੁੱਕ ਹੁੰਦੇ ਹੋ, PrithviX ਕਿਸਾਨ ਦੇ ਭੁਗਤਾਨ ਨੂੰ ਐਸਕਰੋ ਵਿੱਚ ਰੱਖਦਾ ਹੈ। ਇੱਕ ਵਾਰ ਦੋਵੇਂ ਧਿਰਾਂ ਪੁਸ਼ਟੀ ਕਰਦੀਆਂ ਹਨ ਕਿ ਕੰਮ ਹੋ ਗਿਆ ਹੈ, ਇਹ ਆਪਣੇ ਆਪ ਜਾਰੀ ਹੋ ਜਾਂਦਾ ਹੈ।"
        ]
      },
      {
        "q": "PrithviX ਅਧਿਕਾਰਤ ਤੌਰ 'ਤੇ ਕਦੋਂ ਲਾਂਚ ਹੁੰਦਾ ਹੈ - ਅਤੇ ਹੁਣੇ ਰਜਿਸਟਰ ਕਿਉਂ ਕਰੀਏ?",
        "a": [
          "ਅਸੀਂ ਪ੍ਰੀ-ਲਾਂਚ ਵਿੱਚ ਹਾਂ। ਹਰੇਕ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਪਹਿਲੇ 200 ਰਜਿਸਟਰਡ ਉਪਭੋਗਤਾ ਫਾਊਂਡਿੰਗ ਮੈਂਬਰ ਬਣਦੇ ਹਨ - ਉਹਨਾਂ ਨੂੰ ਮਿਲਦਾ ਹੈ: ਤਰਜੀਹੀ ਆਨਬੋਰਡਿੰਗ; ਫਾਊਂਡਿੰਗ-ਮੈਂਬਰ ਕੀਮਤਾਂ; ਅਤੇ ਨਵੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਤੱਕ ਪਹਿਲੀ ਪਹੁੰਚ।",
          "ਰਜਿਸਟਰ ਕਰਨ ਵਿੱਚ 60 ਸਕਿੰਟ ਲੱਗਦੇ ਹਨ। ਅਸੀਂ ਤੁਹਾਡੇ ਸਥਾਨ ਦੀ ਪੁਸ਼ਟੀ ਕਰਨ ਅਤੇ ਕਿਸੇ ਵੀ ਸਵਾਲ ਦਾ ਜਵਾਬ ਦੇਣ ਲਈ 1 ਘੰਟੇ ਦੇ ਅੰਦਰ ਤੁਹਾਨੂੰ ਕਾਲ ਕਰਦੇ ਹਾਂ।"
        ]
      }
    ]
  },
  "floatingElements": {
    "whatsappHover": "ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰੋ",
    "stickyRegister": "ਮੁਫ਼ਤ ਰਜਿਸਟਰ ਕਰੋ →"
  }
};

fs.writeFileSync(path.join(__dirname, '..', 'apps', 'web', 'dictionaries', 'en.json'), JSON.stringify(en, null, 2));
fs.writeFileSync(path.join(__dirname, '..', 'apps', 'web', 'dictionaries', 'hi.json'), JSON.stringify(hi, null, 2));
fs.writeFileSync(path.join(__dirname, '..', 'apps', 'web', 'dictionaries', 'gu.json'), JSON.stringify(gu, null, 2));
fs.writeFileSync(path.join(__dirname, '..', 'apps', 'web', 'dictionaries', 'pa.json'), JSON.stringify(pa, null, 2));
