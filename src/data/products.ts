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
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=400'
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
    name: '500 BOOK',
    price: 500,
    category: 'books',
    description: 'High-quality 500-page counter/exercise book, ideal for records and business logging.',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=300',
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
    image: 'https://images.unsplash.com/photo-1543329064-9a59b9218177?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b4',
    name: 'KALENJIN BIBLE ZIPPED',
    price: 1650,
    category: 'books',
    description: 'Kalenjin Holy Bible with premium zip closure to preserve and protect pages from wear and dust.',
    image: 'https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b5',
    name: 'WEMA HAUOZI BOOK',
    price: 430,
    category: 'books',
    description: 'Swahili Christian literature and inspiring literature books.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b6',
    name: 'DAUGHTER OF NATURE BOOK',
    price: 430,
    category: 'books',
    description: 'Inspirational reading novel regarding natural life, ethics, and character building.',
    image: 'https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b7',
    name: 'MATUMAINI BOOK',
    price: 430,
    category: 'books',
    description: 'Highly motivational Swahili literature book focused on hope, work ethic, and resilience.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b8',
    name: 'BUSINESS BOOK',
    price: 950,
    category: 'books',
    description: 'Premium business ledger notebook and ledger tracker for professional records.',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b9',
    name: 'HUSTLE BOOK',
    price: 750,
    category: 'books',
    description: '"Hustle: How to Charge Your Life with Ideas" or premium business handbook to skyrocket your career.',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'b10',
    name: 'RETIRE YOUNG RETIRE RICH BOOK',
    price: 950,
    category: 'books',
    description: 'Bestseller financial book by Robert Kiyosaki, outlining wealth acceleration strategies.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b11',
    name: 'THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE',
    price: 950,
    category: 'books',
    description: 'Stephen Covey’s classic handbook for personal and professional effectiveness and leadership.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b12',
    name: '48 LAWS OF POWER BOOK',
    price: 1500,
    category: 'books',
    description: 'Classic philosophical book by Robert Greene on psychology, strategy, and power mechanics.',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b13',
    name: 'THE RICHEST MAN IN BABYLON BOOK',
    price: 750,
    category: 'books',
    description: 'George S. Clason’s legendary book on wealth creation, financial health, and saving strategies.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'b14',
    name: 'PRAYING HUSBAND BOOK',
    price: 750,
    category: 'books',
    description: '"The Power of a Praying Husband" by Stormie Omartian. Practical guides for married Christian life.',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },

  // Office & School Essentials
  {
    id: 'o1',
    name: 'FLEXIBLE RULER',
    price: 40,
    category: 'office',
    description: '30cm shatterproof flexible plastic ruler. Safe for school children and high durability.',
    image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f43d39?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o2',
    name: 'GEL X PEN',
    price: 30,
    category: 'office',
    description: 'Fine point gel ink pen with comfortable rubber grip. Smooth writing, quick drying.',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o3',
    name: 'PEN GEL X (Assorted Colors)',
    price: 30,
    category: 'office',
    description: 'Vibrant gel pens for school notebooks and office reviews. Smooth rollerball action.',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o4',
    name: 'EXECUTIVE PENS',
    price: 100,
    category: 'office',
    description: 'Sleek professional ballpoint pen with premium metal finish and dark ink. Outstanding corporate look.',
    image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'o5',
    name: 'OFFICE PEN SET',
    price: 95,
    category: 'office',
    description: 'Comfortable writing office pen with ergonomic design. Clean, continuous flow without blots.',
    image: 'https://images.unsplash.com/photo-1585336261022-675929945037?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o6',
    name: 'SCISSORS',
    price: 150,
    category: 'office',
    description: 'Multi-use durable stainless steel scissors with comfortable soft grip handles.',
    image: 'https://images.unsplash.com/photo-1502472545319-8577bd57222e?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o7',
    name: 'PUNCH (Heavy Duty)',
    price: 430,
    category: 'office',
    description: 'Double hole paper puncher with guide bar, easily punches up to 20-30 paper sheets.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o8',
    name: 'FILE (Lever Arch File)',
    price: 300,
    category: 'office',
    description: 'Robust lever arch folder with metal reinforcement edges for tidy office paper organization.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o9',
    name: 'STANDARD OFFICE FILE Folder',
    price: 180,
    category: 'office',
    description: 'Lightweight easy flat-file binder with fastener. Ideal for organizing active papers.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o10',
    name: 'HEAVY DUTY BOX FILE',
    price: 320,
    category: 'office',
    description: 'Premium quality thick board box file with secure closure. Ideal for archival storage.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'o11',
    name: 'CLEAR PACKING TAPE',
    price: 180,
    category: 'office',
    description: 'Strong adhesion heavy-duty packing tape for packages, sealing boxes, and wrapping.',
    image: 'https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o12',
    name: 'DOUBLE SIDED TAPE',
    price: 150,
    category: 'office',
    description: 'High strength, multi-purpose double-sided foam tape for mounting and quick school craftwork.',
    image: 'https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o13',
    name: 'PREMIUM GLUE Bottle',
    price: 150,
    category: 'office',
    description: 'Dust-free quick drying craft glue for paper, cardboard, and fabric applications.',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o14',
    name: 'RUBBER BANDS PACK',
    price: 100,
    category: 'office',
    description: 'Full packet of high elasticity, strong tension rubber bands for bundling and general use.',
    image: 'https://images.unsplash.com/photo-1594913785162-e6785b423cb4?auto=format&fit=crop&q=80&w=300',
    unit: 'pack'
  },
  {
    id: 'o15',
    name: 'THERMAL ROLLS 57x40mm',
    price: 50,
    category: 'office',
    description: 'Highly sensitive thermal receipt paper rolls for POS printers and credit card machines.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'o16',
    name: 'PREMIUM LANYARDS',
    price: 50,
    category: 'office',
    description: 'Comfortable fabric lanyards with secure metal hook for staff IDs, visitor cards, and keychains.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },

  // Art, Drawing & Mathematics
  {
    id: 'a1',
    name: 'GRAPH PAPER REAM',
    price: 900,
    category: 'art_math',
    description: 'Precision grid graph paper, ideal for mathematics, engineering, and architecture sketches.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45e9b2d4f?auto=format&fit=crop&q=80&w=300',
    unit: 'ream',
    featured: true
  },
  {
    id: 'a2',
    name: 'PHOTO PAPER A4 (Glossy)',
    price: 200,
    category: 'art_math',
    description: 'Superb glossy A4 photo papers for sharp high-resolution prints. Ideal for inkjets.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    unit: 'pack'
  },
  {
    id: 'a3',
    name: 'PHOTO PAPER 4R (Glossy)',
    price: 200,
    category: 'art_math',
    description: 'Excellent glossy photo papers, pre-cut to standard 4R postcard size (4x6 inches).',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    unit: 'pack'
  },
  {
    id: 'a4',
    name: 'PREMIUM MATTE PAPER',
    price: 250,
    category: 'art_math',
    description: 'Matte coated premium printing paper. Excellent for high quality flyers, artwork, and reports.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300',
    unit: 'pack'
  },
  {
    id: 'a5',
    name: 'CLASSMATE CLEAR MATHS INSTRUMENT',
    price: 250,
    category: 'art_math',
    description: 'Classmate Clear Mathematical geometry set. Transparent tools with precise calibration.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },
  {
    id: 'a6',
    name: 'OXFORD MATHEMATICAL INSTRUMENT',
    price: 250,
    category: 'art_math',
    description: 'The genuine Helix Oxford Mathematical Instruments tin box. Trustworthy worldwide standard.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300',
    unit: 'set',
    featured: true
  },
  {
    id: 'a7',
    name: 'DRAWING KIT (Standard)',
    price: 250,
    category: 'art_math',
    description: 'Comprehensive compass, protractor, and school drawing essentials kit.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },
  {
    id: 'a8',
    name: 'DELUXE DRAWING SET',
    price: 420,
    category: 'art_math',
    description: 'Expanded set of compasses, dividers, set squares, and drafting rulers for advanced students.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },
  {
    id: 'a9',
    name: 'ENGINEERING DRAWING SET',
    price: 1200,
    category: 'art_math',
    description: 'Professional-grade engineering and architecture technical drafting set in a protective padded case.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=300',
    unit: 'set',
    featured: true
  },
  {
    id: 'a10',
    name: 'TRIANGULAR SCALE RULER',
    price: 250,
    category: 'art_math',
    description: 'Architect’s triangular scale ruler. Made of high-grade plastic with multiple color-coded ratios.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'a11',
    name: 'COLOURED PENCILS Pack',
    price: 320,
    category: 'art_math',
    description: 'Richly pigmented, break-resistant colored pencils. Highly vibrant results for sketches and art projects.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    unit: 'pack'
  },
  {
    id: 'a12',
    name: 'PREMIUM WATER COLOURS Palette',
    price: 150,
    category: 'art_math',
    description: 'Multi-shade water color pan palette including a fine synthetic paint brush. Great for creative classrooms.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },
  {
    id: 'a13',
    name: 'WATER COLOUR PAINT Tube Set',
    price: 80,
    category: 'art_math',
    description: 'Affordable fluid water color tubes. Excellent for initial art experimentation and blending lessons.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },
  {
    id: 'a14',
    name: 'DRAWING & WRITING BOARD',
    price: 200,
    category: 'art_math',
    description: 'Double-sided dry erase whiteboard and chalkboard. Perfect for student quick-notes and homework exercises.',
    image: 'https://images.unsplash.com/photo-1572945281864-8fe49f550e7a?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'a15',
    name: 'CALLIGRAPHY 4NIB SET',
    price: 280,
    category: 'art_math',
    description: 'Elegant fountain pen calligraphy set with 4 distinct interchangeable metal nibs and rich black ink.',
    image: 'https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=300',
    unit: 'set'
  },

  // Printers & Printing Media
  {
    id: 'i1',
    name: 'CHARITY INK Bottle',
    price: 180,
    category: 'ink_tech',
    description: 'Vibrant and quick-drying duplication ink or stamp pad ink. Crisp impressions.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'i2',
    name: 'OFFICE MULTIFUNCTION PRINTER',
    price: 45000,
    category: 'ink_tech',
    description: 'Professional high-speed heavy-duty printer, copier, and scanner. Ideal for school environments and active offices.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'i3',
    name: 'LAMINATING PAPER SHEET',
    price: 10,
    category: 'ink_tech',
    description: 'Waterproof protective laminate sheets for securing certificates, IDs, and flyers.',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=300',
    unit: 'sheet'
  },

  // Accessories & General Supply
  {
    id: 'ac1',
    name: 'DUSTLESS CHALK (Box of 80)',
    price: 80,
    category: 'accessories',
    description: 'High grade dustless school chalks. Safe, clean, and minimizes dust-related allergies.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=300',
    unit: 'box'
  },
  {
    id: 'ac2',
    name: 'BULK DUSTLESS CHALK (800 pieces)',
    price: 800,
    category: 'accessories',
    description: 'Large economy carton of premium white dustless school chalks. Perfect for institutions.',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1141?auto=format&fit=crop&q=80&w=300',
    unit: 'carton'
  },
  {
    id: 'ac3',
    name: 'DECORATIVE COLOR RIBBONS',
    price: 300,
    category: 'accessories',
    description: 'Satin gloss decorative ribbons, ideal for corporate gift wraps, events, and school award bands.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'ac4',
    name: 'SOFT SILICONE PENCIL POUCH',
    price: 80,
    category: 'accessories',
    description: 'Flexible soft silicone zippered pencil pouch. Easy wash, waterproof, and extremely trendy.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'ac5',
    name: 'STRUCTURED METAL PENCIL CASE',
    price: 290,
    category: 'accessories',
    description: 'Tough structured metal stationery case featuring neat divider compartments inside for school tools.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  },
  {
    id: 'ac6',
    name: 'DESCANT RECORDER (Flute)',
    price: 240,
    category: 'accessories',
    description: 'Standard 8-hole plastic descant soprano recorder. Ideal for primary and secondary music lessons.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'ac7',
    name: 'SCIENTIFIC CALCULATOR FX-82MS',
    price: 1300,
    category: 'accessories',
    description: 'Authentic 240-function Casio secondary school scientific calculator. Highly durable keycaps.',
    image: 'https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs',
    featured: true
  },
  {
    id: 'ac8',
    name: 'BINDING & CRAFT THREADS',
    price: 180,
    category: 'accessories',
    description: 'High tensile strength binding threads, perfect for archival book stitching and craft stitching.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
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
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&q=80&w=300',
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
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=300',
    unit: 'pcs'
  }
];
