/**
 * Zmax General Stationers - Pure Vanilla JavaScript App Engine
 * Handles all states: navigation tabs, product catalog filtering, real-time search,
 * shopping cart persistence (localStorage), WhatsApp order form generation,
 * responsive slide-out cart drawers, floating widgets, and image lightbox.
 */

// --- 1. CONFIGURATION & DATA ENGINE ---
const CATEGORIES = [
  {
    id: 'books',
    name: 'Books & Bibles',
    description: 'Bibles, educational manuals, and inspirational self-help bestsellers.',
    icon: 'book',
    image: 'https://images.unsplash.com/photo-1612350495102-fb43af38bb16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzJTIwYW5kJTIwYmlibGV8ZW58MHx8MHx8fDA%3D'
  },
  {
    id: 'office',
    name: 'Office & School Essentials',
    description: 'Pens, files, tapes, punchers, and desktop organization tools.',
    icon: 'briefcase',
    image: 'https://images.unsplash.com/photo-1784198611829-cb3c8a7343de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzV8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 'art_math',
    name: 'Art, Drawing & Maths',
    description: 'Mathematical instruments, scale rulers, drawing kits, and fine paper.',
    icon: 'compass',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ink_tech',
    name: 'Printers & Printing Media',
    description: 'Printers, inks, thermal POS rolls, and laminating media.',
    icon: 'printer',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'accessories',
    name: 'Accessories & General Supply',
    description: 'Musical instruments, calculators, pencil cases, tissue, and ribbons.',
    icon: 'paperclip',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400'
  }
];

const PRODUCTS = [
  // Books & Bibles
  {
    id: 'b1',
    name: 'TIENWOKIK  BOOK',
    price: 500,
    category: 'books',
    description: 'High-quality Kalenjin hymn book.',
    image: 'https://images.unsplash.com/photo-1784192929978-adaa4fbb84c2?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b2',
    name: 'TIENWOKIK ZIPPED (Kalenjin Song Book)',
    price: 650,
    category: 'books',
    description: 'Kalenjin Hymnal song book with zipped protector cover. Easy to carry and durable.',
    image: 'https://images.unsplash.com/photo-1784201338694-a34cce63488c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'b3',
    name: 'EXPOSITOR BIBLE KJV',
    price: 2000,
    category: 'books',
    description: 'The Expositor Study Bible, King James Version (KJV). Perfect for detailed scripture study and notes.',
    image: 'https://images.unsplash.com/photo-1784201338698-e3f988d4f94f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTclfHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b4',
    name: 'KALENJIN BIBLE ZIPPED',
    price: 1650,
    category: 'books',
    description: 'Kalenjin Holy Bible with premium zip closure to preserve and protect pages from wear and dust.',
    image: 'https://images.unsplash.com/photo-1784201338343-941c6fd99c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjN8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b5',
    name: 'WEMA HAUOZI BOOK',
    price: 430,
    category: 'books',
    description: 'Swahili Christian literature and inspiring literature books.',
    image: 'https://images.unsplash.com/photo-1784201338705-5eab2aedb310?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'b6',
    name: 'DAUGHTER OF NATURE BOOK',
    price: 430,
    category: 'books',
    description: 'Inspirational reading novel regarding natural life, ethics, and character building.',
    image: 'https://images.unsplash.com/photo-1784201338687-5f4f0337de0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTh8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'b7',
    name: 'Mshale wa matumaini MATUMAINI BOOK',
    price: 430,
    category: 'books',
    description: 'Highly motivational Swahili literature book focused on hope, work ethic, and resilience.',
    image: 'https://images.unsplash.com/photo-1784201338567-cd0657906ff6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'b8',
    name: 'BUSINESS BOOK',
    price: 950,
    category: 'books',
    description: 'Premium business ledger notebook and ledger tracker for professional records.',
    image: 'https://images.unsplash.com/photo-1784201338384-b8cf19d04720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'b9',
    name: 'HUSTLE BOOK',
    price: 750,
    category: 'books',
    description: '"Hustle: How to Charge Your Life with Ideas" or premium business handbook to skyrocket your career.',
    image: 'https://images.unsplash.com/photo-1784206009899-d8ea35c0261a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'b10',
    name: 'RETIRE YOUNG RETIRE RICH BOOK',
    price: 950,
    category: 'books',
    description: 'Bestseller financial book by Robert Kiyosaki, outlining wealth acceleration strategies.',
    image: 'https://images.unsplash.com/photo-1784206009980-4cc39b03e3e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b11',
    name: 'THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE',
    price: 950,
    category: 'books',
    description: 'Stephen Covey’s classic handbook for personal and professional effectiveness and leadership.',
    image: 'https://images.unsplash.com/photo-1784206010006-7204b14d346f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b12',
    name: '48 LAWS OF POWER BOOK',
    price: 1500,
    category: 'books',
    description: 'Classic philosophical book by Robert Greene on psychology, strategy, and power mechanics.',
    image: 'https://images.unsplash.com/photo-1784206009898-fe5196e6a96f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b13',
    name: 'THE RICHEST MAN IN BABYLON BOOK',
    price: 750,
    category: 'books',
    description: 'George S. Clason’s legendary book on wealth creation, financial health, and saving strategies.',
    image: 'https://images.unsplash.com/photo-1784198611651-f1bc613d1142?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDN8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b14',
    name: 'PRAYING HUSBAND BOOK',
    price: 750,
    category: 'books',
    description: '"The Power of a Praying Husband" by Stormie Omartian. Practical guides for married Christian life.',
    image: 'https://images.unsplash.com/photo-1784198611677-9f147d07f751?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTJ8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },

  // Office & School Essentials
  {
    id: 'o1',
    name: 'FLEXIBLE RULER',
    price: 40,
    category: 'office',
    description: '30cm shatterproof flexible plastic ruler. Safe for school children and high durability.',
    image: 'https://images.unsplash.com/photo-1784201338736-0ca6e1bcc4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjR8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o2',
    name: 'GEL X PEN',
    price: 30,
    category: 'office',
    description: 'Fine point gel ink pen with comfortable rubber grip. Smooth writing, quick drying.',
    image: 'https://images.unsplash.com/photo-1784201338691-aa5adecd026e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'o3',
    name: 'PEN GEL X (Assorted Colors)',
    price: 30,
    category: 'office',
    description: 'Vibrant gel pens for school notebooks and office reviews. Smooth rollerball action.',
    image: 'https://images.unsplash.com/photo-1784201338691-aa5adecd026e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'o4',
    name: 'EXECUTIVE PENS',
    price: 100,
    category: 'office',
    description: 'Sleek professional ballpoint pen with premium metal finish and dark ink. Outstanding corporate look.',
    image: 'https://images.unsplash.com/photo-1784201338385-a031ad2b29c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'o5',
    name: 'OFFICE PEN SET',
    price: 95,
    category: 'office',
    description: 'Comfortable writing office pen with ergonomic design. Clean, continuous flow without blots.',
    image: 'https://images.unsplash.com/photo-1784201338518-db111aac85f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'o6',
    name: 'SCISSORS',
    price: 150,
    category: 'office',
    description: 'Multi-use durable stainless steel scissors with comfortable soft grip handles.',
    image: 'https://images.unsplash.com/photo-1784198611670-de61b848d925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTN8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o7',
    name: 'PUNCH (Heavy Duty)',
    price: 430,
    category: 'office',
    description: 'Double hole paper puncher with guide bar, easily punches up to 20-30 paper sheets.',
    image: 'https://images.unsplash.com/photo-1784198611858-78440d7b11dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzJ8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o8',
    name: 'FILE (Lever Arch File)',
    price: 300,
    category: 'office',
    description: 'Robust lever arch folder with metal reinforcement edges for tidy office paper organization.',
    image: 'https://images.unsplash.com/photo-1784198611730-b3c4b83e9852?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDF8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o9',
    name: 'STANDARD OFFICE FILE Folder',
    price: 180,
    category: 'office',
    description: 'Lightweight easy flat-file binder with fastener. Ideal for organizing active papers.',
    image: 'https://images.unsplash.com/photo-1784198611686-f93308f64f58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzR8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o10',
    name: 'HEAVY DUTY BOX FILE',
    price: 320,
    category: 'office',
    description: 'Premium quality thick board box file with secure closure. Ideal for archival storage.',
    image: 'https://images.unsplash.com/photo-1784198611694-9d4823af0740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjB8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'o11',
    name: 'CLEAR PACKING TAPE',
    price: 180,
    category: 'office',
    description: 'Strong adhesion heavy-duty packing tape for packages, sealing boxes, and wrapping.',
    image: 'https://images.unsplash.com/photo-1784214235244-a9372d893400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'o12',
    name: 'DOUBLE SIDED TAPE',
    price: 150,
    category: 'office',
    description: 'High strength, multi-purpose double-sided foam tape for mounting and quick school craftwork.',
    image: 'https://images.unsplash.com/photo-1784198611725-3c305870b328?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTR8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o13',
    name: 'PREMIUM GLUE Bottle',
    price: 150,
    category: 'office',
    description: 'Dust-free quick drying craft glue for paper, cardboard, and fabric applications.',
    image: 'https://images.unsplash.com/photo-1784198611694-e95718cb0289?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'o14',
    name: 'RUBBER BANDS PACK',
    price: 100,
    category: 'office',
    description: 'Full packet of high elasticity, strong tension rubber bands for bundling and general use.',
    image: 'https://images.unsplash.com/photo-1784201338554-6a69f2a95ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTJ8fHxlbnwwfHx8fHw%3D',
    unit: 'pack'
  },
  {
    id: 'o15',
    name: 'THERMAL ROLLS 57x40mm',
    price: 50,
    category: 'office',
    description: 'Highly sensitive thermal receipt paper rolls for POS printers and credit card machines.',
    image: 'https://images.unsplash.com/photo-1784201338387-792d75eade29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'o16',
    name: 'PREMIUM LANYARDS',
    price: 50,
    category: 'office',
    description: 'Comfortable fabric lanyards with secure metal hook for staff IDs, visitor cards, and keychains.',
    image: 'https://images.unsplash.com/photo-1784198611829-cb3c8a7343de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDV8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },

  // Art, Drawing & Mathematics
  {
    id: 'a1',
    name: 'GRAPH PAPER REAM',
    price: 900,
    category: 'art_math',
    description: 'Precision grid graph paper, ideal for mathematics, engineering, and architecture sketches.',
    image: 'https://images.unsplash.com/photo-1784208971275-637a37cc5a95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'ream',
    featured: true
  },
  {
    id: 'a2',
    name: 'Photo Paper A4',
    price: 200,
    category: 'art_math',
    description: 'Superb glossy A4 photo papers for sharp high-resolution prints. Ideal for inkjets.',
    image: 'https://images.unsplash.com/photo-1784192930208-6b957daf07f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fHw%3D',
    unit: 'pack'
  },
  {
    id: 'a3',
    name: 'Glossy Photo Paper',
    price: 200,
    category: 'art_math',
    description: 'Excellent glossy photo papers, pre-cut to standard 4R postcard size (4x6 inches).',
    image: 'https://images.unsplash.com/photo-1784192929884-f9e70d2218d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njl8fHxlbnwwfHx8fHw%3D',
    unit: 'pack'
  },
  {
    id: 'a4',
    name: 'Sticker Paper',
    price: 250,
    category: 'art_math',
    description: 'Premium self-adhesive sticker paper sheets. Excellent for custom labeling, crafts, and high-quality stickers.',
    image: 'https://images.unsplash.com/photo-1784212549065-08a16f845d68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pack'
  },
  {
    id: 'a5',
    name: 'CLASSMATE CLEAR MATHS INSTRUMENT',
    price: 250,
    category: 'art_math',
    description: 'Classmate Clear Mathematical geometry set. Transparent tools with precise calibration.',
    image: 'https://images.unsplash.com/photo-1784192929983-6852d80bc4b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Njd8fHxlbnwwfHx8fHw%3D00',
    unit: 'set'
  },
  {
    id: 'a6',
    name: 'OXFORD MATHEMATICAL INSTRUMENT',
    price: 250,
    category: 'art_math',
    description: 'The genuine Helix Oxford Mathematical Instruments tin box. Trustworthy worldwide standard.',
    image: 'https://images.unsplash.com/photo-1784198611827-94cc7045baa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fHw%3D',
    unit: 'set',
    featured: true
  },
  {
    id: 'a7',
    name: 'DRAWING KIT (Standard)',
    price: 250,
    category: 'art_math',
    description: 'Comprehensive compass, protractor, and school drawing essentials kit.',
    image: 'https://images.unsplash.com/photo-1784198611654-10cff304f82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjF8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },
  {
    id: 'a8',
    name: 'DELUXE DRAWING SET',
    price: 420,
    category: 'art_math',
    description: 'Expanded set of compasses, dividers, set squares, and drafting rulers for advanced students.',
    image: 'https://images.unsplash.com/photo-1784201338823-b60c763bcffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzV8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },
  {
    id: 'a9',
    name: 'ENGINEERING DRAWING SET',
    price: 1200,
    category: 'art_math',
    description: 'Professional-grade engineering and architecture technical drafting set in a protective padded case.',
    image: 'https://images.unsplash.com/photo-1784201338340-ad2d3eb6a471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjF8fHxlbnwwfHx8fHw%3D',
    unit: 'set',
    featured: true
  },
  {
    id: 'a10',
    name: 'TRIANGULAR SCALE RULER',
    price: 250,
    category: 'art_math',
    description: 'Architect’s triangular scale ruler. Made of high-grade plastic with multiple color-coded ratios.',
    image: 'https://images.unsplash.com/photo-1784201338303-733492769f27?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'a11',
    name: 'COLOURED PENCILS Pack',
    price: 320,
    category: 'art_math',
    description: 'Richly pigmented, break-resistant colored pencils. Highly vibrant results for sketches and art projects.',
    image: 'https://images.unsplash.com/photo-1784201338423-7a72f4f7b725?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzl8fHxlbnwwfHx8fHw%3D',
    unit: 'pack'
  },
  {
    id: 'a12',
    name: 'PREMIUM WATER COLOURS Palette',
    price: 150,
    category: 'art_math',
    description: 'Multi-shade water color pan palette including a fine synthetic paint brush. Great for creative classrooms.',
    image: 'https://images.unsplash.com/photo-1784201338296-292005485ea0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },
  {
    id: 'a13',
    name: 'WATER COLOUR PAINT Tube Set',
    price: 80,
    category: 'art_math',
    description: 'Affordable fluid water color tubes. Excellent for initial art experimentation and blending lessons.',
    image: 'https://images.unsplash.com/photo-1784198611785-f917ab772c21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTV8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },
  {
    id: 'a14',
    name: 'DRAWING & WRITING BOARD',
    price: 200,
    category: 'art_math',
    description: 'Double-sided dry erase whiteboard and chalkboard. Perfect for student quick-notes and homework exercises.',
    image: 'https://images.unsplash.com/photo-1784201338823-b60c763bcffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mzh8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'a15',
    name: 'CALLIGRAPHY 4NIB SET',
    price: 280,
    category: 'art_math',
    description: 'Elegant fountain pen calligraphy set with 4 distinct interchangeable metal nibs and rich black ink.',
    image: 'https://images.unsplash.com/photo-178420600984-b6e8e8240bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTJ8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },

  // Printers & Printing Media
  {
    id: 'i1',
    name: 'Clarity Ink Bottles',
    price: 180,
    category: 'ink_tech',
    description: 'Vibrant and quick-drying duplication ink or stamp stamp pad ink. Crisp impressions. Highly clear and reliable.',
    image: 'https://images.unsplash.com/photo-1784198611799-22bd9b0de8ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTl8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'i1_canon',
    name: 'Canon Ink',
    price: 1200,
    category: 'ink_tech',
    description: 'Genuine Canon printer ink bottle for rich, vibrant colors and deep blacks in document and photo prints.',
    image: 'https://images.unsplash.com/photo-1784208969583-8e3b63576921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'i1_epson',
    name: 'Epson Ink',
    price: 1100,
    category: 'ink_tech',
    description: 'High-yield Epson genuine ink bottle with spill-free refill mechanism. Delivers crisp black and color documents.',
    image: 'https://images.unsplash.com/photo-1784208967866-88eda2554a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'i2',
    name: 'OFFICE MULTIFUNCTION PRINTER',
    price: 45000,
    category: 'ink_tech',
    description: 'Professional high-speed heavy-duty printer, copier, and scanner. Ideal for school environments and active offices.',
    image: 'https://images.unsplash.com/photo-1784206010042-9b6e9475b6fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Nnx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'i3',
    name: 'LAMINATING PAPER SHEET',
    price: 10,
    category: 'ink_tech',
    description: 'Waterproof protective laminate sheets for securing certificates, IDs, and flyers.',
    image: 'https://images.unsplash.com/photo-1663729929770-f40df1cdc078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFtaW5hdGluZyUyMHBhcGVyJTIwc2hlZXRzfGVufDB8fDB8fHww',
    unit: 'sheet'
  },

  // Accessories & General Supply
  {
    id: 'ac1',
    name: 'DUSTLESS CHALK (Box of 80)',
    price: 80,
    category: 'accessories',
    description: 'High grade dustless school chalks. Safe, clean, and minimizes dust-related allergies.',
    image: 'https://images.unsplash.com/photo-1784192930007-db2430169cb8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'box'
  },
  {
    id: 'ac2',
    name: 'BULK DUSTLESS CHALK (800 pieces)',
    price: 800,
    category: 'accessories',
    description: 'Large economy carton of premium white dustless school chalks. Perfect for institutions.',
    image: 'https://images.unsplash.com/photo-1784192930007-db2430169cb8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'carton'
  },
  {
    id: 'ac3',
    name: 'DECORATIVE COLOR RIBBONS',
    price: 300,
    category: 'accessories',
    description: 'Satin gloss decorative ribbons, ideal for corporate gift wraps, events, and school award bands.',
    image: 'https://images.unsplash.com/photo-1784201338800-94f0842e1395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'ac4',
    name: 'SOFT SILICONE PENCIL POUCH',
    price: 80,
    category: 'accessories',
    description: 'Flexible soft silicone zippered pencil pouch. Easy wash, waterproof, and extremely trendy.',
    image: 'https://images.unsplash.com/photo-1784201339078-9e570966712e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjB8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'ac5',
    name: 'STRUCTURED METAL PENCIL CASE',
    price: 290,
    category: 'accessories',
    description: 'Tough structured metal stationery case featuring neat divider compartments inside for school tools.',
    image: 'https://images.unsplash.com/photo-1784201338746-758e7a70997b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjN8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  },
  {
    id: 'ac6',
    name: 'DESCANT RECORDER (Flute)',
    price: 240,
    category: 'accessories',
    description: 'Standard 8-hole plastic descant soprano recorder. Ideal for primary and secondary music lessons.',
    image: 'https://images.unsplash.com/photo-1784201338814-776aff019e6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjJ8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'ac7',
    name: 'SCIENTIFIC CALCULATOR FX-82MS',
    price: 1300,
    category: 'accessories',
    description: 'Authentic 240-function Casio secondary school scientific calculator. Highly durable keycaps.',
    image: 'https://images.unsplash.com/photo-1784201338741-72e7b1035f92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'ac8',
    name: 'BINDING & CRAFT THREADS',
    price: 180,
    category: 'accessories',
    description: 'High tensile strength binding threads, perfect for archival book stitching and craft stitching.',
    image: 'https://images.unsplash.com/photo-1784201338288-20e8b7ef0607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fHw%3D',
    unit: 'roll'
  },
  {
    id: 'ac9',
    name: 'UTILITY DRAWSTRING BAG',
    price: 80,
    category: 'accessories',
    description: 'Small lightweight non-woven drawstring bag for daily carries, gym shoes, or stationery bundles.',
    image: 'https://images.unsplash.com/photo-1784206009999-9c1815d99c0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'ac10',
    name: 'FACIAL TISSUES Pack',
    price: 150,
    category: 'accessories',
    description: 'Soft 2-ply sanitary facial tissues pocket pack, highly absorbent.',
    image: 'https://plus.unsplash.com/premium_photo-1682148737203-8118bb2b3e07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFwZXIlMjByb2xsfGVufDB8fDB8fHww',
    unit: 'pack'
  },
  {
    id: 'ac11',
    name: 'SOFT HAND TISSUE Roll',
    price: 50,
    category: 'accessories',
    description: 'Highly hygiene soft hand tissue toilet roll for office or domestic applications.',
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'ac12',
    name: 'ZIP FOR PENS (Pen organizer)',
    price: 180,
    category: 'accessories',
    description: 'Sleek cloth zipper pocket designed for neat classification of pens, highlighters, and USBs.',
    image: 'https://images.unsplash.com/photo-1784198611733-fd4b55eb07b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Unx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  },
  {
    id: 'ac13',
    name: 'ROBE CUBEES',
    price: 200,
    category: 'accessories',
    description: 'Fun and engaging 3x3 speed magic cubes. Perfect for mind training, focus, and brain teaser puzzle challenges.',
    image: 'https://images.unsplash.com/photo-1784213691811-2eb3abacd78c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D',
    unit: 'pcs'
  }
];

const BRAND_KEYWORDS = ['canon', 'epson', 'clarity', 'casio', 'oxford'];

// --- 2. GLOBAL STATE SYSTEM ---
let currentTab = 'home';
let searchQuery = '';
let selectedCategory = 'all';
let sortBy = 'featured';
let maxPrice = 45000;
let cartItems = [];
let isCartOpen = false;
let isMobileMenuOpen = false;
let isLightboxOpen = false;
let lightboxProduct = null;
let lightboxZoomed = false;

// --- 3. STATE SYNCHRONIZER & PERSISTENCE ---
function loadCartFromStorage() {
  const saved = localStorage.getItem('zmax_cart');
  if (saved) {
    try {
      cartItems = JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse cart items", e);
      cartItems = [];
    }
  }
}

function saveCartToStorage() {
  localStorage.setItem('zmax_cart', JSON.stringify(cartItems));
}

// --- 4. CORE CONTROLLERS ---

function initApp() {
  loadCartFromStorage();
  bindGlobalEvents();
  renderAll();
}

function bindGlobalEvents() {
  // Navigation tabs (Desktop & Mobile)
  document.querySelectorAll('[data-tab]').forEach(el => {
    el.addEventListener('click', (e) => {
      const tab = el.getAttribute('data-tab');
      switchTab(tab);
    });
  });

  // Category Quick Filter from Home
  document.addEventListener('click', (e) => {
    const quickCat = e.target.closest('[data-quick-category]');
    if (quickCat) {
      const catId = quickCat.getAttribute('data-quick-category');
      selectedCategory = catId;
      searchQuery = '';
      
      // Update filter controls in DOM
      const searchInputs = document.querySelectorAll('.catalog-search-input');
      searchInputs.forEach(input => input.value = '');

      switchTab('shop');
    }
  });

  // Search Submit (Hero banner form)
  const heroForm = document.getElementById('hero-search-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const queryVal = document.getElementById('hero-search-input').value;
      executeCatalogSearch(queryVal);
    });
  }

  // Hero Quick Tags
  document.querySelectorAll('[data-search-tag]').forEach(el => {
    el.addEventListener('click', () => {
      const tag = el.getAttribute('data-search-tag');
      const heroInput = document.getElementById('hero-search-input');
      if (heroInput) heroInput.value = tag;
      executeCatalogSearch(tag);
    });
  });

  // Main catalog inputs
  const catalogSearch = document.getElementById('catalog-search-input');
  if (catalogSearch) {
    catalogSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      selectedCategory = 'all'; // Reset category to all when typing
      renderAll();
      toggleDesktopSuggestions(true);
    });
    catalogSearch.addEventListener('focus', () => {
      toggleDesktopSuggestions(true);
    });
    catalogSearch.addEventListener('blur', () => {
      setTimeout(() => toggleDesktopSuggestions(false), 200);
    });
  }

  // Mobile search inputs
  const mobileSearch = document.getElementById('mobile-search-input');
  if (mobileSearch) {
    mobileSearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      selectedCategory = 'all';
      if (currentTab !== 'shop') {
        switchTab('shop');
      } else {
        renderAll();
      }
      toggleMobileSuggestions(true);
    });
    mobileSearch.addEventListener('focus', () => {
      toggleMobileSuggestions(true);
    });
    mobileSearch.addEventListener('blur', () => {
      setTimeout(() => toggleMobileSuggestions(false), 200);
    });
  }

  // Mobile clear search buttons
  document.querySelectorAll('.clear-search-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      searchQuery = '';
      const inputs = document.querySelectorAll('.catalog-search-input');
      inputs.forEach(i => i.value = '');
      renderAll();
    });
  });

  // Category chip selectors (Catalog)
  const categoryChipsContainer = document.getElementById('category-chips-container');
  if (categoryChipsContainer) {
    categoryChipsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('[data-category-chip]');
      if (chip) {
        selectedCategory = chip.getAttribute('data-category-chip');
        renderAll();
      }
    });
  }

  // Sorting Selector
  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortBy = e.target.value;
      renderProductsGrid();
    });
  }

  // Price Slider
  const priceSlider = document.getElementById('price-limit-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider) {
    priceSlider.addEventListener('input', (e) => {
      maxPrice = Number(e.target.value);
      if (priceDisplay) priceDisplay.innerText = `KES ${maxPrice.toLocaleString()}`;
      renderProductsGrid();
    });
  }

  // Hamburger Menu toggle
  const menuBtn = document.getElementById('mobile-menu-toggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      isMobileMenuOpen = !isMobileMenuOpen;
      toggleMobileMenuDOM();
    });
  }

  // Cart overlay sliders
  const cartBtn = document.getElementById('header-cart-btn');
  const cartDrawerClose = document.getElementById('cart-drawer-close');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');
  const dragHandle = document.getElementById('cart-drag-handle');

  if (cartBtn) cartBtn.addEventListener('click', () => openCart());
  if (cartDrawerClose) cartDrawerClose.addEventListener('click', () => closeCart());
  if (cartBackdrop) cartBackdrop.addEventListener('click', () => closeCart());
  if (dragHandle) dragHandle.addEventListener('click', () => closeCart());

  // Checkout info validations & triggers
  const checkoutForm = document.getElementById('whatsapp-checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleFormCheckout();
    });
  }

  // Delivery Method change listener (to show/hide location address box)
  const deliverySelect = document.getElementById('delivery-method-select');
  if (deliverySelect) {
    deliverySelect.addEventListener('change', (e) => {
      const val = e.target.value;
      const locationContainer = document.getElementById('delivery-location-container');
      if (locationContainer) {
        if (val === 'pickup') {
          locationContainer.classList.add('hidden');
        } else {
          locationContainer.classList.remove('hidden');
        }
      }
    });
  }

  // Form input validation resets
  const nameInp = document.getElementById('customer-name');
  const phoneInp = document.getElementById('customer-phone');
  const locInp = document.getElementById('customer-location');

  if (nameInp) nameInp.addEventListener('input', () => clearError('name'));
  if (phoneInp) phoneInp.addEventListener('input', () => clearError('phone'));
  if (locInp) locInp.addEventListener('input', () => clearError('location'));

  // Floating WhatsApp Support trigger
  const floatingTrigger = document.getElementById('whatsapp-floating-trigger');
  if (floatingTrigger) {
    floatingTrigger.addEventListener('click', () => {
      const windowEl = document.getElementById('whatsapp-support-window');
      const isClosed = windowEl.classList.contains('hidden');
      if (isClosed) {
        windowEl.classList.remove('hidden', 'opacity-0', 'translate-y-4');
        windowEl.classList.add('animate-slide-up');
        floatingTrigger.innerHTML = `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
      } else {
        windowEl.classList.add('hidden');
        floatingTrigger.innerHTML = `
          <svg class="h-6.5 w-6.5 fill-white text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.485 5.353 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.674-1.037-5.188-2.927-7.081-1.889-1.892-4.403-2.933-7.078-2.934C6.49 1.62 2 6.108 1.997 11.628c-.001 2.112.553 4.177 1.604 5.952l-.994 3.633 3.73-.977s.103.056.31.178z" />
          </svg>
          <span class="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span class="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white"></span>
        `;
      }
    });
  }

  const startChatBtn = document.getElementById('start-whatsapp-chat-btn');
  if (startChatBtn) {
    startChatBtn.addEventListener('click', () => {
      const phone = "254727209415";
      const message = "Hello ZMAX General Stationers, I am browsing your online catalog and have a general inquiry.";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }

  // Close support window button
  const closeSupportBtn = document.getElementById('close-support-window');
  if (closeSupportBtn) {
    closeSupportBtn.addEventListener('click', () => {
      const windowEl = document.getElementById('whatsapp-support-window');
      windowEl.classList.add('hidden');
      const trigger = document.getElementById('whatsapp-floating-trigger');
      if (trigger) {
        trigger.innerHTML = `
          <svg class="h-6.5 w-6.5 fill-white text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.311 1.485 5.353 1.486 5.517 0 10.005-4.487 10.008-10.006.002-2.674-1.037-5.188-2.927-7.081-1.889-1.892-4.403-2.933-7.078-2.934C6.49 1.62 2 6.108 1.997 11.628c-.001 2.112.553 4.177 1.604 5.952l-.994 3.633 3.73-.977s.103.056.31.178z" />
          </svg>
          <span class="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          <span class="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white"></span>
        `;
      }
    });
  }

  // Lightbox Close controls
  const lightboxClose = document.getElementById('lightbox-close-btn');
  const lightboxBackdrop = document.getElementById('image-lightbox-overlay');
  const lightboxZoomBtn = document.getElementById('lightbox-zoom-btn');

  if (lightboxClose) lightboxClose.addEventListener('click', () => closeLightbox());
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener('click', (e) => {
      if (e.target === lightboxBackdrop) closeLightbox();
    });
  }
  if (lightboxZoomBtn) {
    lightboxZoomBtn.addEventListener('click', () => toggleLightboxZoom());
  }

  const lightboxImg = document.getElementById('lightbox-image-el');
  if (lightboxImg) {
    lightboxImg.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLightboxZoom();
    });
  }

  // Lightbox Add to Cart button
  const lightboxAddToCart = document.getElementById('lightbox-add-to-cart-btn');
  if (lightboxAddToCart) {
    lightboxAddToCart.addEventListener('click', () => {
      if (lightboxProduct) {
        addToCart(lightboxProduct, 1);
        updateLightboxUI();
      }
    });
  }

  // Lightbox Instant Order Button
  const lightboxBuyNow = document.getElementById('lightbox-buy-now-btn');
  if (lightboxBuyNow) {
    lightboxBuyNow.addEventListener('click', () => {
      if (lightboxProduct) {
        instantWhatsAppSingleOrder(lightboxProduct, 1);
      }
    });
  }

  // Esc key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (isLightboxOpen) closeLightbox();
      if (isCartOpen) closeCart();
    }
  });
}

function switchTab(tabId) {
  currentTab = tabId;
  isMobileMenuOpen = false;
  toggleMobileMenuDOM();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  renderAll();
}

function executeCatalogSearch(query) {
  searchQuery = query;
  selectedCategory = 'all';
  switchTab('shop');

  // Sync inputs
  const inputs = document.querySelectorAll('.catalog-search-input');
  inputs.forEach(i => i.value = query);
}

// --- 5. SEARCH & AUTO-SUGGEST ENGINE ---
function getFilteredProducts() {
  const query = searchQuery.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    // 1. Search Query filter
    let matchesSearch = true;
    if (query) {
      const nameMatch = product.name.toLowerCase().includes(query);
      const descMatch = product.description ? product.description.toLowerCase().includes(query) : false;
      const catObj = CATEGORIES.find(c => c.id === product.category);
      const catMatch = catObj ? catObj.name.toLowerCase().includes(query) : false;
      const catIdMatch = product.category.toLowerCase().includes(query);
      
      const brandMatch = BRAND_KEYWORDS.some(b => product.name.toLowerCase().includes(b) && b.includes(query));
      
      const keywords = product.keywords || [];
      const keywordsMatch = keywords.some(k => k.toLowerCase().includes(query));

      matchesSearch = nameMatch || descMatch || catMatch || catIdMatch || brandMatch || keywordsMatch;
    }

    // 2. Category Filter
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    // 3. Price Filter
    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    if (sortBy === 'featured') {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
    }
    return 0;
  });
}

function toggleDesktopSuggestions(show) {
  const dropdown = document.getElementById('desktop-autocomplete-dropdown');
  if (!dropdown) return;

  if (show && searchQuery.trim().length > 0) {
    dropdown.classList.remove('hidden');
    renderSuggestions('desktop-autocomplete-dropdown', 'catalog-search-input');
  } else {
    dropdown.classList.add('hidden');
  }
}

function toggleMobileSuggestions(show) {
  const dropdown = document.getElementById('mobile-autocomplete-dropdown');
  if (!dropdown) return;

  if (show && searchQuery.trim().length > 0) {
    dropdown.classList.remove('hidden');
    renderSuggestions('mobile-autocomplete-dropdown', 'mobile-search-input');
  } else {
    dropdown.classList.add('hidden');
  }
}

function renderSuggestions(dropdownId, inputId) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    dropdown.innerHTML = `
      <div class="p-4 text-center text-sm text-gray-500 font-medium">
        No products found.
      </div>
    `;
    return;
  }

  let html = `
    <div class="p-2 space-y-1">
      <div class="px-3 py-1.5 text-[10px] font-black text-gray-400 uppercase tracking-wider border-b border-gray-50 mb-1">
        Matching Products (${filtered.length})
      </div>
  `;

  filtered.slice(0, 6).forEach((product) => {
    const catObj = CATEGORIES.find(c => c.id === product.category);
    html += `
      <button
        onclick="selectSuggestion('${product.id}', '${dropdownId}', '${inputId}')"
        class="w-full flex items-center p-2 rounded-xl hover:bg-gray-50 transition-colors text-left"
      >
        <img
          src="${product.image}"
          alt="${product.name}"
          class="h-10 w-10 object-contain rounded-lg border border-gray-100 bg-gray-50/50 p-1 mr-3 shrink-0"
          referrerpolicy="no-referrer"
        />
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-gray-900 truncate">${product.name}</h4>
          <p class="text-[11px] text-gray-400 font-medium truncate">
            ${catObj ? catObj.name : product.category}
          </p>
        </div>
        <span class="text-xs font-black text-red-600 ml-2">
          KES ${product.price.toLocaleString()}
        </span>
      </button>
    `;
  });

  if (filtered.length > 6) {
    html += `
      <button
        onclick="viewAllSearchResults('${dropdownId}')"
        class="w-full text-center py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-all"
      >
        View all ${filtered.length} results
      </button>
    `;
  }

  html += `</div>`;
  dropdown.innerHTML = html;
}

window.selectSuggestion = function(productId, dropdownId, inputId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  searchQuery = product.name;
  selectedCategory = 'all';
  
  const searchInput = document.getElementById(inputId);
  if (searchInput) searchInput.value = product.name;

  document.getElementById(dropdownId).classList.add('hidden');

  if (currentTab !== 'shop') {
    switchTab('shop');
  } else {
    renderAll();
  }

  setTimeout(() => {
    const element = document.getElementById(`product-card-${productId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.classList.add('ring-2', 'ring-red-500');
      setTimeout(() => element.classList.remove('ring-2', 'ring-red-500'), 2000);
    }
  }, 150);
};

window.viewAllSearchResults = function(dropdownId) {
  document.getElementById(dropdownId).classList.add('hidden');
  if (currentTab !== 'shop') {
    switchTab('shop');
  } else {
    renderAll();
  }
};

// --- 6. SHOPPING CART ENGINE ---
window.addToCart = function(product, qty) {
  // If product is passed as id
  if (typeof product === 'string') {
    product = PRODUCTS.find(p => p.id === product);
  }
  if (!product) return;

  const existingIndex = cartItems.findIndex(item => item.product.id === product.id);
  if (existingIndex > -1) {
    cartItems[existingIndex].quantity += qty;
  } else {
    cartItems.push({ product, quantity: qty });
  }

  saveCartToStorage();
  updateCartCounters();
  renderCartDrawer();
  triggerCartButtonBounce();
};

window.updateCartQuantity = function(productId, qty) {
  if (qty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = cartItems.find(item => item.product.id === productId);
  if (item) {
    item.quantity = qty;
    saveCartToStorage();
    updateCartCounters();
    renderCartDrawer();
  }
};

window.removeFromCart = function(productId) {
  cartItems = cartItems.filter(item => item.product.id !== productId);
  saveCartToStorage();
  updateCartCounters();
  renderCartDrawer();
};

window.clearCart = function() {
  cartItems = [];
  saveCartToStorage();
  updateCartCounters();
  renderCartDrawer();
};

function updateCartCounters() {
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Update header badges
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(badge => {
    badge.innerText = totalQty;
    if (totalQty > 0) {
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  });

  // Update Drawer Header Count
  const drawerCount = document.getElementById('cart-drawer-count');
  if (drawerCount) drawerCount.innerText = cartItems.length;
}

function triggerCartButtonBounce() {
  const btn = document.getElementById('header-cart-btn');
  if (!btn) return;
  btn.classList.add('animate-bounce-short');
  setTimeout(() => {
    btn.classList.remove('animate-bounce-short');
  }, 1000);
}

// --- 7. CART DRAWER WINDOW ---
function openCart() {
  isCartOpen = true;
  document.getElementById('cart-drawer-overlay').classList.remove('hidden', 'pointer-events-none');
  
  const panel = document.getElementById('cart-drawer-panel');
  panel.style.transform = 'translate(0, 0)';
  
  document.body.style.overflow = 'hidden'; // lock scroll
  renderCartDrawer();
}

function closeCart() {
  isCartOpen = false;
  document.getElementById('cart-drawer-overlay').classList.add('pointer-events-none');
  
  const panel = document.getElementById('cart-drawer-panel');
  const isMobile = window.innerWidth < 768;
  panel.style.transform = isMobile ? 'translateY(100%)' : 'translateX(100%)';
  
  setTimeout(() => {
    if (!isCartOpen) {
      document.getElementById('cart-drawer-overlay').classList.add('hidden');
      document.body.style.overflow = ''; // unlock scroll
    }
  }, 300);
}

function renderCartDrawer() {
  const listContainer = document.getElementById('cart-drawer-items-list');
  const emptyContainer = document.getElementById('cart-drawer-empty-state');
  const contentWrapper = document.getElementById('cart-drawer-content-wrapper');
  const bottomCheckout = document.getElementById('cart-drawer-bottom-checkout');
  
  if (!listContainer) return;

  if (cartItems.length === 0) {
    emptyContainer.classList.remove('hidden');
    contentWrapper.classList.add('hidden');
    bottomCheckout.classList.add('hidden');
    return;
  }

  emptyContainer.classList.add('hidden');
  contentWrapper.classList.remove('hidden');
  bottomCheckout.classList.remove('hidden');

  let html = '';
  let subtotal = 0;

  cartItems.forEach((item) => {
    const itemSub = item.product.price * item.quantity;
    subtotal += itemSub;

    html += `
      <div class="flex items-center border border-gray-150 p-3 rounded-2xl bg-white hover:border-gray-200 transition-all shadow-sm">
        <img
          src="${item.product.image}"
          alt="${item.product.name}"
          class="h-[70px] w-[70px] object-contain rounded-xl shrink-0 border border-gray-100 bg-gray-50/50 p-1.5"
          referrerpolicy="no-referrer"
        />
        
        <div class="ml-3.5 flex-1 min-w-0 pr-1.5 space-y-1">
          <h4 class="text-sm font-black text-gray-900 leading-snug line-clamp-2 break-words">
            ${item.product.name}
          </h4>
          <div class="flex flex-wrap items-baseline gap-1">
            <span class="text-xs font-extrabold text-gray-700">
              KES ${item.product.price.toLocaleString()}
            </span>
            ${item.product.unit ? `<span class="text-[10px] text-gray-400 font-semibold">/${item.product.unit}</span>` : ''}
            <span class="text-[10px] text-red-600 font-extrabold ml-auto bg-red-50 px-1.5 py-0.2 rounded">
              Sub: KES ${itemSub.toLocaleString()}
            </span>
          </div>
        </div>

        <!-- Quantity Controls -->
        <div class="flex items-center space-x-1.5 bg-gray-50 border border-gray-150 rounded-xl p-1 shrink-0">
          <button
            type="button"
            onclick="updateCartQuantity('${item.product.id}', ${item.quantity - 1})"
            class="h-10 w-10 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            aria-label="Decrease quantity"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
          </button>
          <span class="w-5 text-center text-xs sm:text-sm font-black text-gray-900">
            ${item.quantity}
          </span>
          <button
            type="button"
            onclick="updateCartQuantity('${item.product.id}', ${item.quantity + 1})"
            class="h-10 w-10 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
            aria-label="Increase quantity"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
        </div>

        <!-- Trash Button -->
        <button
          type="button"
          onclick="removeFromCart('${item.product.id}')"
          class="text-gray-400 hover:text-red-600 active:text-red-700 p-2.5 hover:bg-red-50 rounded-xl transition-all shrink-0 cursor-pointer ml-1.5"
          title="Delete item"
        >
          <svg class="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>
    `;
  });

  listContainer.innerHTML = html;

  // Render cost cards & summaries
  const orderSubtotals = document.querySelectorAll('.order-subtotal-val');
  orderSubtotals.forEach(el => el.innerText = `KES ${subtotal.toLocaleString()}`);

  const totals = document.querySelectorAll('.cart-total-val');
  totals.forEach(el => el.innerText = `KES ${subtotal.toLocaleString()}`);
}

function handleFormCheckout() {
  const name = document.getElementById('customer-name').value.trim();
  const phone = document.getElementById('customer-phone').value.trim();
  const method = document.getElementById('delivery-method-select').value;
  const location = document.getElementById('customer-location') ? document.getElementById('customer-location').value.trim() : '';
  const notes = document.getElementById('customer-notes').value.trim();

  let hasErrors = false;

  if (!name) {
    showError('name', 'Full name is required');
    hasErrors = true;
  }
  if (!phone) {
    showError('phone', 'Phone number is required');
    hasErrors = true;
  }
  if (method !== 'pickup' && !location) {
    showError('location', 'Delivery location is required');
    hasErrors = true;
  }

  if (hasErrors) {
    // Scroll to form
    const form = document.getElementById('checkout-form-container');
    if (form) form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  // Formatting WhatsApp Checkout message
  const itemsLines = cartItems
    .map(item => `• ${item.product.name} x${item.quantity} - KES ${(item.product.price * item.quantity).toLocaleString()}`)
    .join('\n');

  const methodLabels = {
    rider: 'Rider Delivery (Within Kericho)',
    courier: 'Courier (G4S / Wells Fargo Countrywide)',
    pickup: 'Store Pick-up (Tengecha Lane, Kericho)'
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const message = `
Hello ZMAX GENERAL STATIONERS LTD,
I would like to order:
${itemsLines}
Total: KES ${subtotal.toLocaleString()}

Customer Info:
Name: ${name}
Phone: ${phone}
Delivery Method: ${methodLabels[method] || method}
${method !== 'pickup' ? `Delivery Location: ${location}` : ''}
Notes: ${notes || 'None'}
  `.trim();

  const hotline = "254727209415";
  const url = `https://wa.me/${hotline}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function showError(field, msg) {
  const errEl = document.getElementById(`error-${field}`);
  const inputEl = document.getElementById(`customer-${field}`);
  
  if (errEl) {
    errEl.innerText = msg;
    errEl.classList.remove('hidden');
  }
  if (inputEl) {
    inputEl.classList.add('border-red-500', 'bg-red-50/20');
  }
}

function clearError(field) {
  const errEl = document.getElementById(`error-${field}`);
  const inputEl = document.getElementById(`customer-${field}`);
  
  if (errEl) {
    errEl.classList.add('hidden');
  }
  if (inputEl) {
    inputEl.classList.remove('border-red-500', 'bg-red-50/20');
  }
}

// --- 8. PRODUCT LIGHTBOX IMAGE MODAL ---
window.openLightbox = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  lightboxProduct = product;
  isLightboxOpen = true;
  lightboxZoomed = false;

  document.getElementById('lightbox-overlay-container').classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  updateLightboxUI();
};

window.closeLightbox = function() {
  isLightboxOpen = false;
  lightboxProduct = null;
  lightboxZoomed = false;

  document.getElementById('lightbox-overlay-container').classList.add('hidden');
  
  // Only restore scroll if cart is also closed
  if (!isCartOpen) {
    document.body.style.overflow = '';
  }
};

function toggleLightboxZoom() {
  lightboxZoomed = !lightboxZoomed;
  const img = document.getElementById('lightbox-image-el');
  const btn = document.getElementById('lightbox-zoom-btn');
  
  if (!img || !btn) return;

  if (lightboxZoomed) {
    img.style.transform = 'scale(1.35)';
    img.style.cursor = 'zoom-out';
    btn.innerHTML = `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"></path></svg>`;
    btn.title = "Zoom Out";
  } else {
    img.style.transform = 'scale(1)';
    img.style.cursor = 'zoom-in';
    btn.innerHTML = `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>`;
    btn.title = "Zoom In";
  }
}

function updateLightboxUI() {
  if (!lightboxProduct) return;

  const img = document.getElementById('lightbox-image-el');
  const title = document.getElementById('lightbox-title');
  const price = document.getElementById('lightbox-price');
  const category = document.getElementById('lightbox-category-tag');
  const addBtn = document.getElementById('lightbox-add-to-cart-btn');

  if (img) img.src = lightboxProduct.image;
  if (title) title.innerText = lightboxProduct.name;
  
  if (price) {
    price.innerHTML = `
      KES ${lightboxProduct.price.toLocaleString()}
      ${lightboxProduct.unit ? `<span class="text-xs text-white/50 font-medium"> / ${lightboxProduct.unit}</span>` : ''}
    `;
  }
  
  if (category) category.innerText = lightboxProduct.category.toUpperCase().replace('_', ' ');

  // Sync add to cart status
  const isInCart = cartItems.some(item => item.product.id === lightboxProduct.id);
  if (addBtn) {
    if (isInCart) {
      addBtn.className = "flex-1 sm:flex-initial py-2 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 border bg-emerald-500/20 border-emerald-500/30 text-emerald-300 transition-all cursor-pointer";
      addBtn.innerHTML = `
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>In Cart</span>
      `;
    } else {
      addBtn.className = "flex-1 sm:flex-initial py-2 px-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 border bg-white text-gray-900 border-white hover:bg-gray-100 transition-all cursor-pointer";
      addBtn.innerHTML = `
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
        <span>Add to Cart</span>
      `;
    }
  }
}

window.instantWhatsAppSingleOrder = function(productId, qty) {
  let product = productId;
  if (typeof productId === 'string') {
    product = PRODUCTS.find(p => p.id === productId);
  }
  if (!product) return;

  // Find quantity
  let quantity = qty;
  const qtyInput = document.getElementById(`qty-val-${product.id}`);
  if (qtyInput) quantity = Number(qtyInput.innerText);

  const phone = "254727209415";
  const itemTotal = product.price * quantity;
  const message = `
Hello ZMAX GENERAL STATIONERS LTD,
I would like to order this single item immediately:
• ${product.name} x${quantity} - KES ${product.price.toLocaleString()}
Total: KES ${itemTotal.toLocaleString()}

My Details:
Name:
Phone:
Delivery Location:
  `.trim();
  
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

// --- 9. RENDER DYNAMICS ---

function renderAll() {
  renderActiveTab();
  renderNavigationDOM();
  updateCartCounters();
}

function renderActiveTab() {
  const tabs = ['home', 'shop', 'about', 'services', 'contact'];
  tabs.forEach(tab => {
    const view = document.getElementById(`view-${tab}`);
    if (view) {
      if (tab === currentTab) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    }
  });

  // Load specific tab components
  if (currentTab === 'home') {
    renderHomeFeatured();
  } else if (currentTab === 'shop') {
    renderCatalogFilterBar();
    renderProductsGrid();
  }
}

function renderNavigationDOM() {
  // Sync Desktop Links
  document.querySelectorAll('[id^="nav-link-"]').forEach(link => {
    const linkTab = link.id.replace('nav-link-', '');
    if (linkTab === currentTab) {
      link.className = "px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 bg-red-50 text-red-600 shadow-sm";
    } else {
      link.className = "px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 text-gray-600 hover:text-red-600 hover:bg-gray-50";
    }
  });

  // Sync Mobile Links
  document.querySelectorAll('[id^="mobile-nav-link-"]').forEach(link => {
    const linkTab = link.id.replace('mobile-nav-link-', '');
    if (linkTab === currentTab) {
      link.className = "w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 bg-red-50 text-red-600";
    } else {
      link.className = "w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 text-gray-600 hover:text-red-600 hover:bg-gray-50";
    }
  });
}

function toggleMobileMenuDOM() {
  const menu = document.getElementById('mobile-drawer-menu');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  
  if (!menu) return;

  if (isMobileMenuOpen) {
    menu.classList.remove('hidden');
    if (toggleBtn) {
      toggleBtn.innerHTML = `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
    }
  } else {
    menu.classList.add('hidden');
    if (toggleBtn) {
      toggleBtn.innerHTML = `<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
    }
  }
}

function renderHomeFeatured() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  const featured = PRODUCTS.filter(p => p.featured).slice(0, 8);
  container.innerHTML = renderProductCardsHTML(featured);
}

function renderCatalogFilterBar() {
  // Sync Category Chips
  const container = document.getElementById('category-chips-container');
  if (!container) return;

  let html = `
    <button
      data-category-chip="all"
      class="px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide uppercase whitespace-nowrap snap-center shrink-0 transition-all cursor-pointer ${
        selectedCategory === 'all'
          ? 'bg-red-600 text-white shadow-md shadow-red-100'
          : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
      }"
    >
      All Departments
    </button>
  `;

  CATEGORIES.forEach((cat) => {
    html += `
      <button
        data-category-chip="${cat.id}"
        class="px-4 py-2.5 rounded-xl text-xs font-extrabold tracking-wide uppercase whitespace-nowrap snap-center shrink-0 transition-all cursor-pointer ${
          selectedCategory === cat.id
            ? 'bg-red-600 text-white shadow-md shadow-red-100'
            : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
        }"
      >
        ${cat.name}
      </button>
    `;
  });

  container.innerHTML = html;
}

function renderProductsGrid() {
  const container = document.getElementById('products-display-grid');
  const countDisplay = document.getElementById('products-count-label');
  const noProducts = document.getElementById('no-products-found-state');

  if (!container) return;

  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    container.classList.add('hidden');
    if (countDisplay) countDisplay.classList.add('hidden');
    if (noProducts) noProducts.classList.remove('hidden');
    return;
  }

  container.classList.remove('hidden');
  if (countDisplay) {
    countDisplay.classList.remove('hidden');
    countDisplay.innerText = `DISPLAYING ${filtered.length} ITEMS IN KENYA`;
  }
  if (noProducts) noProducts.classList.add('hidden');

  container.innerHTML = renderProductCardsHTML(filtered);
}

function renderProductCardsHTML(productList) {
  const categoryLabels = {
    books: { label: 'Book & Bible', color: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    office: { label: 'Office & School', color: 'bg-indigo-50 text-indigo-700 border-indigo-100' },
    art_math: { label: 'Art & Mathematics', color: 'bg-pink-50 text-pink-700 border-pink-100' },
    ink_tech: { label: 'Printers & Inks', color: 'bg-amber-50 text-amber-700 border-amber-100' },
    accessories: { label: 'Accessory / Supply', color: 'bg-teal-50 text-teal-700 border-teal-100' }
  };

  let html = '';

  productList.forEach((product) => {
    const badge = categoryLabels[product.category] || { label: 'Stationery', color: 'bg-gray-50 text-gray-700 border-gray-100' };
    const inCartItem = cartItems.find(item => item.product.id === product.id);
    const isInCart = !!inCartItem;
    const cartQty = inCartItem ? inCartItem.quantity : 0;

    html += `
      <div
        id="product-card-${product.id}"
        class="bg-white rounded-2xl border border-gray-150 hover:border-red-100 hover:shadow-xl hover:shadow-red-50/20 transition-all duration-300 flex flex-col h-full group overflow-hidden shadow-sm"
      >
        <!-- Product Image -->
        <div 
          className="relative pt-[85%] bg-gray-50/50 overflow-hidden shrink-0 cursor-zoom-in group/img flex items-center justify-center"
          style="position: relative; padding-top: 85%;"
          onclick="openLightbox('${product.id}')"
        >
          <img
            src="${product.image}"
            alt="${product.name}"
            class="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-102 transition-transform duration-500 mx-auto my-auto"
            style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; padding: 1rem;"
            referrerpolicy="no-referrer"
            loading="lazy"
          />
          
          <!-- Category Tag -->
          <span class="absolute top-2.5 left-2.5 text-[9px] md:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${badge.color} shadow-sm backdrop-blur-md bg-white/90 z-10">
            ${badge.label}
          </span>

          <!-- Featured Badge -->
          ${product.featured ? `
            <span class="absolute top-2.5 right-2.5 bg-amber-500 text-white p-1 rounded shadow-sm flex items-center justify-center z-10" title="Bestseller / Popular">
              <svg class="h-3 w-3 fill-white text-white stroke-none" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            </span>
          ` : ''}
        </div>

        <!-- Product Info -->
        <div class="p-3.5 md:p-5 flex flex-col flex-grow justify-between space-y-3 md:space-y-4">
          <div class="space-y-1">
            <h3 class="text-gray-900 font-extrabold text-sm md:text-base tracking-tight leading-snug line-clamp-2 min-h-[2.5rem] md:min-h-[2.75rem] hover:text-red-600 transition-colors">
              ${product.name}
            </h3>
            <p class="text-gray-500 text-[11px] md:text-xs line-clamp-2 leading-relaxed min-h-[2rem] md:min-h-[2.5rem]">
              ${product.description || 'Authentic high-quality stationery items by ZMAX.'}
            </p>
          </div>

          <!-- Price & Unit -->
          <div class="flex items-baseline space-x-1 border-t border-gray-50 pt-2.5">
            <span class="text-[10px] md:text-[11px] font-extrabold text-gray-400 uppercase">KES</span>
            <span class="text-lg md:text-xl font-black text-gray-900">${product.price.toLocaleString()}</span>
            ${product.unit ? `<span class="text-[11px] md:text-xs font-bold text-gray-400">/${product.unit}</span>` : ''}
          </div>

          <!-- Controls & Buttons -->
          <div class="space-y-2 pt-1">
            <div class="flex items-center justify-between bg-gray-50 p-1 rounded-xl border border-gray-100">
              <span class="text-[10px] md:text-xs font-extrabold text-gray-400 uppercase tracking-wider pl-1.5">Qty:</span>
              <div class="flex items-center space-x-1">
                <button
                  type="button"
                  onclick="changeQtyVal('${product.id}', -1)"
                  class="h-8 w-8 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
                  aria-label="Decrease quantity"
                >
                  <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                </button>
                <span id="qty-val-${product.id}" class="w-6 text-center text-xs md:text-sm font-black text-gray-900">1</span>
                <button
                  type="button"
                  onclick="changeQtyVal('${product.id}', 1)"
                  class="h-8 w-8 rounded-lg bg-white border border-gray-200 text-gray-700 hover:text-red-500 hover:border-red-200 flex items-center justify-center transition-colors shadow-sm cursor-pointer active:scale-95"
                  aria-label="Increase quantity"
                >
                  <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                </button>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <button
                type="button"
                id="add-btn-dom-${product.id}"
                onclick="triggerAddToCartFlow('${product.id}')"
                class="h-12 w-full rounded-xl font-extrabold text-xs md:text-sm flex items-center justify-center space-x-1.5 transition-all duration-200 cursor-pointer border ${
                  isInCart ? 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm' : 'bg-red-600 text-white border-transparent shadow-md shadow-red-50'
                }"
              >
                ${isInCart ? `
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>In Cart (${cartQty})</span>
                ` : `
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  <span>Add to Order List</span>
                `}
              </button>

              <button
                type="button"
                onclick="instantWhatsAppSingleOrder('${product.id}', 1)"
                class="h-12 w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-xs md:text-sm rounded-xl flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-md shadow-emerald-50"
              >
                <svg class="h-4 w-4 fill-white text-white stroke-none" viewBox="0 0 24 24"><path d="M20 22.621l-3.521-6.793c-.115-.224-.311-.377-.557-.424l-3.418-.654c-.244-.047-.497.027-.677.199l-2.613 2.502c-1.844-1.391-3.327-2.887-4.654-4.733l2.453-2.503c.175-.179.243-.433.189-.675l-.689-3.111c-.053-.243-.213-.44-.441-.532l-6.223-2.525c-.243-.099-.523-.05-.718.125l-2.072 1.865c-.279.251-.355.666-.183.998 1.944 3.754 4.887 7.784 8.761 11.666s7.91 6.817 11.664 8.761c.332.172.747.096.998-.183l1.865-2.072c.175-.195.224-.475.125-.718zm.379 1.379l-1.865 2.072c-.838.931-2.221 1.185-3.327.611-3.951-2.046-7.85-5.068-11.597-8.816s-6.77-7.646-8.816-11.597c-.574-1.106-.32-2.489.611-3.327l2.072-1.865c.651-.586 1.584-.751 2.392-.421l6.223 2.525c.76.309 1.293.966 1.47 1.776l.689 3.111c.181.815-.047 1.662-.63 2.259l-1.579 1.611c.954 1.523 2.071 2.76 3.486 4.175s2.652 2.532 4.175 3.486l1.611-1.579c.597-.583 1.444-.811 2.259-.63l3.418.654c.81.155 1.467.712 1.776 1.47l2.525 6.223c.33.808.165 1.741-.421 2.392z"/></svg>
                <span>Buy on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  return html;
}

window.changeQtyVal = function(productId, direction) {
  const el = document.getElementById(`qty-val-${productId}`);
  if (!el) return;
  let currentVal = Number(el.innerText);
  currentVal += direction;
  if (currentVal < 1) currentVal = 1;
  el.innerText = currentVal;
};

window.triggerAddToCartFlow = function(productId) {
  const qtyEl = document.getElementById(`qty-val-${productId}`);
  const qty = qtyEl ? Number(qtyEl.innerText) : 1;
  
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, qty);
  
  // Show animated check on button briefly
  const btn = document.getElementById(`add-btn-dom-${productId}`);
  if (btn) {
    btn.className = "h-12 w-full rounded-xl font-extrabold text-xs md:text-sm flex items-center justify-center space-x-1.5 transition-all duration-200 cursor-pointer border bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm";
    btn.innerHTML = `
      <svg class="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      <span>Added to Order List</span>
    `;
    setTimeout(() => {
      const inCartItem = cartItems.find(item => item.product.id === product.id);
      const cartQty = inCartItem ? inCartItem.quantity : qty;
      btn.innerHTML = `
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>In Cart (${cartQty})</span>
      `;
    }, 1500);
  }
};

window.resetCatalogSearchFilters = function() {
  searchQuery = '';
  selectedCategory = 'all';
  maxPrice = 45000;
  sortBy = 'featured';

  const inputs = document.querySelectorAll('.catalog-search-input');
  inputs.forEach(i => i.value = '');

  const priceSlider = document.getElementById('price-limit-slider');
  const priceDisplay = document.getElementById('price-slider-display');
  if (priceSlider) priceSlider.value = 45000;
  if (priceDisplay) priceDisplay.innerText = "KES 45,000";

  const sortSelect = document.getElementById('catalog-sort-select');
  if (sortSelect) sortSelect.value = 'featured';

  renderAll();
};

// --- 10. BOOT ENGINE ---
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
