export interface DropdownCard {
  title: string;
  desc: string;
  icon: string;
}

export interface NavItem {
  label: string;
  hasDropdown?: boolean;
  panelType?: 'cards' | 'list';
  panelItems?: DropdownCard[] | string[];
}

export const NAVBAR_ITEMS: NavItem[] = [
  { label: 'Home' },

  {
    label: 'Knowledge',
    hasDropdown: true,
    panelItems: [
      {
        title: "Best Practices",
        desc: "Curated initiatives and case studies from India and the world.",
        icon: "assets/icons/bulb.png"
      },
      {
        title: "Policy",
        desc: "One-stop source for policies, schemes, sector overviews.",
        icon: "assets/icons/policy.png"
      },
      {
        title: "Data",
        desc: "Visualization of key trends and insights at various levels.",
        icon: "assets/icons/data.png"
      },
      {
        title: "Starter Kits",
        desc: "Guides to help dive into sectors and themes effectively.",
        icon: "assets/icons/kit.png"
      }
    ]
  },

  { label: 'Sectors', hasDropdown: true,
    panelItems: [
      {
        title: "Skilling Livelihoods & Labour Welfare",
        desc: "",
        icon: "assets/sectors/livelihood.jpg"
      },
      {
        title: "Health & Nutrition",
        desc: "",
        icon: "assets/sectors/health.jpg"
      },
      {
        title: "Education",
        desc: "",
        icon: "assets/sectors/education.jpg"
      },
      {
        title: "Tourism",
        desc: "",
        icon: "assets/sectors/tourism.jpg"
      },
      {
        title: "Agriculture & Allied Services",
        desc: "",
        icon: "assets/sectors/agriculture.jpg"
      },
      {
        title: "Energy",
        desc: "",
        icon: "assets/sectors/energy.jpg"
      },
      {
        title: "Urbanization",
        desc: "",
        icon: "assets/sectors/urban.jpg"
      },
      {
        title: "Water & WASH",
        desc: "",
        icon: "assets/sectors/water.jpg"
      },
      {
        title: "MSME",
        desc: "",
        icon: "assets/sectors/msme.jpg"
      },
      {
        title: "Manufacturing",
        desc: "",
        icon: "assets/sectors/manufacturing.jpg"
      }
    ]
  },
  { 
    label: 'Districts', 
    hasDropdown: true,
    panelType: 'list',
    panelItems: [
      "🏛️ Chennai - Gateway to the South",
      "🌾 Tiruchirappalli - The City of Temples",
      "🏖️ Madurai - The City of Festivals",
      "🌊 Tirunelveli - Pearl of the South",
      "📚 Coimbatore - Manchester of South India",
      "⛰️ Nilgiris - Queen of the Blue Mountains",
      "🌅 Kanyakumari - The Land's End",
      "🏘️ Vellore - The Fortress City",
      "🎭 Chengalpattu - The Garden District",
      "🌴 Kanchipuram - The City of Thousand Temples",
      "🌊 Villupuram - The Historic Hub",
      "🏞️ Ranipet - The Industrial Heart",
      "📖 Tiruppur - The Textile Capital",
      "🌸 Karur - The Diamond City",
      "🏛️ Erode - The City of Weavers",
      "🚤 Sivagangai - The Land of Warriors",
      "🌾 Ramanathapuram - The Pearl Fishery Zone",
      "🏞️ Virudunagar - The Business Hub",
      "🎪 Tenkasi - The Land of Spices",
      "🌄 Theni - The Land of Cardamom",
      "🏘️ Dindigul - The Lock City",
      "🌊 Puducherry - The City of Dreams",
      "⛰️ Kallakurichi - The Land of Tamarind",
      "🌾 Perambalur - The Land of Coconuts"
    ]
  },
  { label: 'Programmes', hasDropdown: true },
  { label: 'NITI Resources' }
];
