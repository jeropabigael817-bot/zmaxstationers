/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Category } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'books',
    name: 'Books & Bibles',
    description: 'Bibles, educational manuals, and inspirational self-help bestsellers.',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'office',
    name: 'Office & School Essentials',
    description: 'Pens, files, tapes, punchers, and desktop organization tools.',
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1784198611829-cb3c8a7343de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MzV8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 'art_math',
    name: 'Art, Drawing & Maths',
    description: 'Mathematical instruments, scale rulers, drawing kits, and fine paper.',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ink_tech',
    name: 'Printers & Printing Media',
    description: 'Printers, inks, thermal POS rolls, and laminating media.',
    icon: 'Printer',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'accessories',
    name: 'Accessories & General Supply',
    description: 'Musical instruments, calculators, pencil cases, tissue, and ribbons.',
    icon: 'Paperclip',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400'
  }
];

export const PRODUCTS: Product[] = [
  // Books & Bibles
  {
    id: 'b1',
    name: 'TIENWOKIK  BOOK',
    price: 500,
    category: 'books',
    description: 'High-quality  Kalenjin hymn  book .',
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
    image: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b3',
    name: 'EXPOSITOR BIBLE KJV',
    price: 2000,
    category: 'books',
    description: 'The Expositor Study Bible, King James Version (KJV). Perfect for detailed scripture study and notes.',
    image: 'https://images.unsplash.com/photo-1784201338698-e3f988d4f94f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTd8fHxlbnwwfHx8fHw%3D',
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
    image: 'https://plus.unsplash.com/premium_photo-1680204967360-a56dc5ab8517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UEFDS0lORyUyMFRBUEV8ZW58MHx8MHx8fDA%3D',
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
    image: 'https://plus.unsplash.com/premium_photo-1707146615071-4d888f924158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fFN0aWNrZXIlMjBQYXBlciUyMGZvciUyMGxhYmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
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
    image: 'https://images.unsplash.com/photo-1784206009984-b6e8e8240bf7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTJ8fHxlbnwwfHx8fHw%3D',
    unit: 'set'
  },

  // Printers & Printing Media
  {
    id: 'i1',
    name: 'Clarity Ink Bottles',
    price: 180,
    category: 'ink_tech',
    description: 'Vibrant and quick-drying duplication ink or stamp pad ink. Crisp impressions. Highly clear and reliable.',
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
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300',
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
    image: 'https://images.unsplash.com/photo-1784198611733-fd4b55eb07b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTV8fHxlbnwwfHx8fHw%3D',
    unit: 'pcs'
  }
];
