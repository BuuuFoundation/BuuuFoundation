
import React from 'react';
import { Heart, Dog, Stethoscope, GraduationCap, Shield, Smile, Anchor, Zap, Home as HomeIcon, Utensils, BookOpen, Activity as Heartbeat, Globe } from 'lucide-react';
import { TeamMember, Activity, SupportArea } from './types';

export const NGO_NAME = "Buuu Foundation";
export const NGO_TAGLINE = "Empowering lives, one act of kindness at a time.";
export const LOGO_URL = "/images/BuuuFoundation_logo.png";

export const SOCIAL_LINKS = {
  phone: "+91 63792 75847",
  email: "contact@buuufoundation.org",
  address: "Guduvanchery, Tamil Nadu, India",
  instagram: "https://www.instagram.com/buuu_foundation/",
  whatsapp: "https://whatsapp.com/channel/0029VaBDF92DjiOTRbrj1W3x",
  facebook: "https://www.facebook.com/profile.php?id=100077431562831",
  linkedin: "https://www.linkedin.com/company/buuu-foundation/",
};

export const INITIATIVES = [
  {
    id: "shelter",
    number: "01",
    title: "Shelter and Welfare Support",
    icon: <HomeIcon className="w-6 h-6" />,
    quote: '"Happiness doesn’t result from what we get, but from what we give." – Mother Teresa',
    description: "We believe no one should go to bed hungry. At Buuu Foundation, we support registered children’s homes, old-age shelters, and animal welfare organizations by sponsoring nutritious meals — breakfast, lunch, or dinner. Beyond meals, we also assist with essential needs like groceries, milk, and utility bills such as electricity, ensuring these shelters can focus on creating a nurturing environment for their residents.",
    extendedInfo: "Over 500 individuals have benefitted from our partnerships with organizations like Udhavum Karangal, Good Life Centre, Save the Children, and more. Together, we are nourishing lives, spreading hope, and uplifting communities in and around Chennai.",
    impactDescription: "Discover the impactful strides we’ve taken in supporting registered children's homes, old-age shelters, and animal welfare organizations."
  },
  {
    id: "nourishing",
    number: "02",
    title: "Nourishing Lives",
    icon: <Utensils className="w-6 h-6" />,
    quote: '"Feeding a hungry soul is the purest form of humanity." – Swami Vivekananda',
    description: "For those without a roof over their heads, we are committed to bridging the gap between despair and dignity. Buuu Foundation provides vital support by distributing food and other essentials, ensuring that the homeless have access to basic necessities.",
    extendedInfo: "From cooked meals and groceries to hygiene kits and warm clothing, we aim to meet immediate needs while restoring a sense of humanity and care. Together, we strive to create a community where no one is left behind where every individual feels seen, valued, and supported in their journey to reclaim dignity and stability.",
    impactDescription: "Discover the impactful strides we’ve taken in providing meals and essential support to those in need."
  },
  {
    id: "education",
    number: "03",
    title: "Empowering through Education",
    icon: <BookOpen className="w-6 h-6" />,
    quote: '"Knowledge is the ultimate wealth that can uplift society and build a stronger nation." – Dr. A.P.J. Abdul Kalam',
    description: "We believe education is the key to breaking the cycle of poverty and creating a brighter future for underprivileged children. Our initiatives span from pre-school education (ages 3-6) to formal schooling (ages 6-18), ensuring holistic development and equitable opportunities.",
    extendedInfo: "We provide financial assistance for tuition fees, sponsoring either a term or an academic year, depending on the funds raised. This support is extended to children facing extreme poverty, living in slums, being disaster-stricken, or managing rare disabilities. All sponsorships are verified through authentic documentation, such as bonafide certificates from schools. Together, with your support, we aim to nurture dreams and empower young minds to rise above their circumstances.",
    impactDescription: "Celebrate the joy of learning with us as we share our recent contributions to education. By sponsoring tuition fees for students with a difficult situation, we’ve helped open the doors to opportunity and knowledge. Each success story represents a step toward breaking the cycle of poverty and empowering future generations."
  },
  {
    id: "healthcare",
    number: "04",
    title: "Healthcare and Wellness",
    icon: <Heartbeat className="w-6 h-6" />,
    quote: '"A life lived for others is a life worth living." – Ratan Tata',
    description: "Health emergencies can be financially overwhelming, leaving individuals and families in desperate need of support. At Buuu Foundation, we provide financial assistance for medical expenses, hospital bills, and treatments for those battling life-threatening, chronic, or rare illnesses.",
    extendedInfo: "While we may not cover the entire cost, our contributions help alleviate the burden of out-of-pocket expenses for medications and procedures. To ensure transparency and fairness, all health-related requests are verified through official documentation, such as hospital bills or letters from healthcare providers. We believe that health is a fundamental requirement, and through your generous donations, we can save lives and bring hope to families in need. Together, we can make healthcare more accessible and ensure that no one faces a crisis alone.",
    impactDescription: "Explore how we’ve lent a helping hand to those facing health crises. From partially covering medical bills to ensuring access to life-saving treatments, our recent endeavors have brought relief and hope to families in need. Together, we’re proving that health is a right, not a privilege."
  },
  {
    id: "general",
    number: "05",
    title: "General Contributions: Gift Of Hope",
    icon: <Globe className="w-6 h-6" />,
    quote: '"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi',
    description: "We are proud to share that Buuu Foundation is dedicated to creating meaningful impacts and brightening lives each day. To make your special moments even more memorable or to honor the legacy of a loved one, we are introducing an initiative called ‘Gift of Hope.’ Through this program, your celebrations or tributes can turn into powerful acts of kindness, spreading hope and making a lasting difference in the lives of those in need.",
    extendedInfo: "Our 'Hope' Fund allows donors to contribute to a general pool, supporting ongoing and future initiatives. This flexibility allows us to respond quickly to emergencies and fill gaps in critical social welfare projects as they arise. Together, let’s transform moments of joy into opportunities for change.",
    impactDescription: "General contributions and our 'Gift of Hope' initiative allow us to remain agile and respond to urgent community needs as they arise."
  }
];

export const FAQ_DATA = [
  {
    category: "General Information",
    questions: [
      {
        q: "What is Buuu Foundation?",
        a: "Buuu Foundation is a non-profit initiative focused on supporting underprivileged children, animal welfare efforts, and registered ashrams through essential aid, education support, and basic care."
      },
      {
        q: "What is the meaning behind the name “Buuu Foundation”?",
        a: "The name Buuu Foundation was chosen in memory of one of the former cats of our founder, Jayavarshini. It reflects compassion, empathy, and a personal commitment to caring for those in need—both humans and animals."
      },
      {
        q: "Is Buuu Foundation a non-profit organization?",
        a: "Yes. Buuu Foundation operates as a non-profit initiative, and all funds received are used solely for charitable and welfare purposes."
      },
      {
        q: "How does Buuu Foundation ensure transparency and accountability?",
        a: "We maintain proper records, follow responsible fund-usage practices, and share updates about our activities to ensure transparency and trust."
      },
      {
        q: "Who benefits from Buuu Foundation’s work?",
        a: "Our beneficiaries include underprivileged children, individuals supported through ashrams and old age homes, animals in need of care and feeding, and communities requiring basic support."
      }
    ]
  },
  {
    category: "Donations & Tax Benefits",
    questions: [
      {
        q: "Is there a minimum amount required to donate?",
        a: "No. There is no minimum donation amount. Every contribution, regardless of size, is valued and helps support our work."
      },
      {
        q: "Do donors receive tax exemption benefits?",
        a: "We are currently in the process of obtaining Section 80G approval. Once approved, eligible donations will qualify for tax exemption as per the Income Tax Act. Tax benefits, where applicable, are provided by the government—not by the Foundation."
      },
      {
        q: "Will I receive a receipt for my donation?",
        a: "Yes. Donation receipts can be provided upon request. These receipts acknowledge the contribution made to Buuu Foundation. Tax exemption details will be included once 80G approval is in place."
      },
      {
        q: "Are donations refundable?",
        a: "Donations are generally non-refundable, as they are used promptly for charitable purposes. However, in case of a genuine concern or error, donors may contact us for review."
      },
      {
        q: "How can I donate to Buuu Foundation?",
        a: "Currently, donations can be made via direct bank transfer. Donation details are available on our website. For any clarification, donors are welcome to contact us directly."
      },
      {
        q: "Can I choose how my donation is used?",
        a: "Where possible, donors may indicate if they would like their contribution to support a specific cause such as education, animal welfare, or ashram support. If no preference is mentioned, funds are allocated based on priority needs."
      },
      {
        q: "Do you accept in-kind donations (food, books, supplies)?",
        a: "Yes. We accept in-kind donations such as food items, books, stationery, and other essential supplies. Please contact us in advance to coordinate."
      }
    ]
  },
  {
    category: "Our Work & Impact",
    questions: [
      {
        q: "What causes does Buuu Foundation support?",
        a: "Our work currently focuses on educational support for underprivileged children, assistance to registered ashrams and old age homes, and animal welfare initiatives, including feeding and medical care."
      },
      {
        q: "How are donations used?",
        a: "Donations are used directly for educational materials and school-related support, food and essential supplies for ashrams, and feeding, medical care, and support for animals. We aim to keep administrative expenses minimal so that maximum support reaches those in need."
      },
      {
        q: "Do you share updates on how donations are used?",
        a: "Yes. We believe in transparency and share updates and activity highlights through our website and social media platforms."
      }
    ]
  },
  {
    category: "Get Involved & Contact",
    questions: [
      {
        q: "Can I volunteer with Buuu Foundation?",
        a: "Yes. We welcome volunteers who wish to support our activities, including education support, animal welfare initiatives, and administrative assistance."
      },
      {
        q: "Can individuals or organizations partner with Buuu Foundation?",
        a: "Yes. We welcome collaborations, partnerships, sponsorships, and CSR initiatives from individuals and organizations aligned with our mission."
      },
      {
        q: "How can I contact Buuu Foundation?",
        a: "You can reach us through our official email, phone number, or social media platforms listed on our website."
      }
    ]
  }
];

export const CORE_VALUES = [
  {
    title: "Transparency",
    description: "We maintain clarity and openness in our values, policies, and actions, sharing knowledge and insights to build trust.",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Respect",
    description: "We foster a culture of mutual respect, embracing diverse opinions and perspectives with dignity.",
    icon: <Smile className="w-6 h-6" />
  },
  {
    title: "Integrity",
    description: "We are committed to honesty, authenticity, and consistency in our words and decisions.",
    icon: <Anchor className="w-6 h-6" />
  },
  {
    title: "Accountability",
    description: "We stand by our promises, taking full responsibility for our actions and their outcomes.",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Passion",
    description: "Driven by hope, we pursue our mission with unwavering dedication.",
    icon: <Zap className="w-6 h-6" />
  }
];


export const SUPPORT_AREAS: SupportArea[] = [
  {
    title: "Registered Ashrams",
    description:
      "We provide need-based support to registered ashrams and old age homes by assisting with essential supplies, nutrition, and basic infrastructure requirements, based on on-ground needs.",
    icon: <Heart className="w-8 h-8 text-rose-500" />,
    image: "/images/08.jpg",
    requirements: [
      "Brief details about the ashram or home",
      "The type of support required",
      "Contact details for coordination",
      "Where applicable, basic registration or compliance details (such as Darpan registration or 80G status)",
    ],
  },
  {
    title: "Animal Welfare",
    description:
      "We support animal welfare initiatives by assisting with medical care, rescue efforts, and feeding programs for street animals and shelters. Support is provided based on urgency and the availability of funds.",
    icon: <Dog className="w-8 h-8 text-amber-500" />,
    image: "/images/07.jpeg",
    requirements: [
      "Details of the animal or animals requiring support",
      "Location and urgency of the situation",
      "Photos or basic documentation, where available",
    ],
  },
  {
    title: "Medical Support",
    description:
      "We provide financial assistance for critical medical needs, including surgeries, medicines, and diagnostic tests, for individuals who require support. Each request is carefully reviewed on a case-by-case basis to ensure help reaches those who need it most.",
    icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
    image: "/images/09.jpg",
    requirements: [
      "A medical summary or prescription from a hospital or doctor",
      "Estimated treatment costs or details of the required medical care",
      "Basic patient information for verification purposes",
    ],
  },
  {
    title: "Education Support",
    description:
      "We support students from marginalized backgrounds by helping cover essential educational expenses such as tuition fees, textbooks, uniforms, and basic learning materials. Our aim is to ensure that financial constraints do not interrupt a child’s education.",
    icon: <GraduationCap className="w-8 h-8 text-emerald-500" />,
    image: "/images/10.jpg",
    requirements: [
      "Student details, such as a bonafide certificate or school ID",
      "Information about the required support (school fees, books, uniforms, etc.)",
      "Basic parent or guardian details, including income information",
      "In some cases, we may verify details directly with the educational institution",
    ],
  },
];


export const TEAM: TeamMember[] = [
  {
    name: "Jayavarshini Thirumalai",
    role: "Founder | Director",
    image: "/images/Team/Jayavarshini.png",
    bio: "Visionary leader combining IT expertise with childhood dreams of social reform.",
    instagram: "https://www.instagram.com/jaya_varshini14/",
    linkedin: "https://www.linkedin.com/in/jayavarshini-thirumalai-23b2a616b/"
  },
  {
    name: "Prabudevan Raja",
    role: "Director",
    image: "/images/Team/Prabudevan.jpeg",
    bio: "Overseeing operations and legal compliance with dedicated focus.",
    instagram: "https://www.instagram.com/talkng__tom/",
    linkedin: "https://www.linkedin.com/in/prabu-devan-b87b26259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Shivavarsha Subramani",
    role: "Co-Founder | Volunteer",
    image: "/images/Team/Shivavarsha.jpg",
    bio: "Leading ground-level initiatives and fostering community relationships.",
    instagram: "https://www.instagram.com/_shiveyy_/",
    linkedin: "https://www.linkedin.com/in/shivavarsha/"
  },
  {
    name: "Mathangi Sankaranarayanan",
    role: "Co-Founder",
    image: "/images/Team/Mathangi.jpeg",
    bio: "Harnessing innovation and strategy to scale our social impact.",
    instagram: "https://www.instagram.com/mathangi_97/",
    linkedin: "https://www.linkedin.com/in/mathangi-s-/"
  }
];

export const VOLUNTEERS = [
  "Sowmiya",
  "Imthiyaz Ahamed",
  "Mithun Kamath",
  "Gangadharan",
  "Srivarshath"
];

export const ACTIVITIES: Activity[] = [
  {
    id: "impact-bark-india-jan-2026",
    initiativeId: "shelter",
    title: "Monthly General Expense Support",
    category: "Animal Welfare",
    description: "Contributed towards the monthly general expenses to support the welfare of animals at Bark India Charitable Trust.",
    images: ["/images/Bark_India_Charitable_Trust/Bark_India_Charitable_Trust_Jan_2026.jpeg"],
    date: "January, 2026",
    fundsProvided: "3,000 INR",
    location: "Bark India Charitable Trust"
  },
  {
    id: "impact-abode-joy-nov-2025",
    initiativeId: "shelter",
    title: "Revisiting Abode of Joy",
    category: "Ashram",
    description: "In November 2025, we had the joy of visiting the ashram again, this time accompanied by our families, team members, and volunteers. Staying true to our tradition, we prepared a wholesome home-cooked lunch and served it with love. The day was filled with laughter, shared stories, and the warmth of togetherness, reinforcing our bond with the residents.",
    images: [
      "/images/Abode of Joy 2025/Photo_1.jpeg",
      "/images/Abode of Joy 2025/Photo_2.jpeg",
      "/images/Abode of Joy 2025/Photo_3.jpeg",
      "/images/Abode of Joy 2025/Photo_4.jpeg",
      "/images/Abode of Joy 2025/Photo_5.jpeg"
    ],
    date: "November, 2025",
    fundsProvided: "Personal Contribution",
    location: "Abode of Joy"
  },
  {
    id: "impact-ramalinga",
    initiativeId: "shelter",
    title: "Ramalinga Adigalar Gurukulam Visit",
    category: "Ashram",
    description: "We had the joy of visiting Ramalinga Adigalar Gurukulam, an orphanage home nurturing children from toddlers to teenagers. Through generous donations, we sponsored dinner for the children, making the evening truly special. During the visit, one of our team members personally connected with the children, sharing delightful moments of laughter and warmth. Bringing along homemade sweets and chocolates added an extra layer of happiness to the occasion.",
    images: [
      "/images/Ramlinga_Adigalar_Gurukulam-2023/Photo_1.jpeg",
      "/images/Ramlinga_Adigalar_Gurukulam-2023/Photo_2.jpeg",
      "/images/Ramlinga_Adigalar_Gurukulam-2023/Photo_3.jpeg",
      "/images/Ramlinga_Adigalar_Gurukulam-2023/Photo_4.jpeg",
      "/images/Ramlinga_Adigalar_Gurukulam-2023/Photo_5.jpeg"
    ],
    date: "April, 2023",
    fundsProvided: "1,500 INR",
    location: "Ramalinga Adigalar Gurukulam"
  },
  {
    id: "impact-cct-mar-2023",
    initiativeId: "education",
    title: "School Accessories Support",
    category: "Education",
    description: "Buuu Foundation raised funds to help a student cover the expenses of their school accessories. We were able to raise the required funds and help the student with 3,750 INR. Thank you everyone for being a part of this kind action. Kindly keep supporting us in the upcoming fundraising activities too.",
    images: ["/images/Children_Charitable_Trust/ChildrenCharitableTrust_March_2023.jpeg"],
    date: "March, 2023",
    fundsProvided: "3,750 INR",
    location: "Children Charitable Trust"
  },
  {
    id: "impact-health-dec-2023",
    initiativeId: "healthcare",
    title: "GBS Treatment Support",
    category: "Medical",
    description: "Buuu Foundation has contributed to the Impact Guru Foundation for the medical expenses of an individual diagnosed with Guillain-Barré syndrome.",
    images: ["/images/Medical/ImpactGuru_December_2023.jpeg "],
    date: "December, 2023",
    fundsProvided: "4,000 INR",
    location: "Impact Guru"
  },
  {
    id: "impact-cct-aug",
    initiativeId: "healthcare",
    title: "Heart Surgery Medical Support",
    category: "Medical",
    description: "Based on the funds raised in August 2023, we supported the critical medical expenses of an 8-year-old child undergoing heart surgery. We thank everyone for your kind support and contributions, and we hope to see your continued support in our upcoming activities.",
    images: ["/images/Children_Charitable_Trust/ChildrenCharitableTrust_August_2023.jpeg"],
    date: "August, 2023",
    fundsProvided: "5,000 INR",
    location: "Children Charitable Trust"
  },
  {
    id: "impact-health-june-2023",
    initiativeId: "healthcare",
    title: "Blood Cancer Support",
    category: "Medical",
    description: "Contributing toward medical expenses for a person fighting blood cancer through the Impact Guru platform.",
    images: ["/images/Medical/ImpactGuru_June_2023.jpeg"],
    date: "June, 2023",
    fundsProvided: "6,000 INR",
    location: "Impact Guru"
  },
  {
    id: "impact-health-march-2023",
    initiativeId: "healthcare",
    title: "Bone Marrow Transplant Support",
    category: "Medical",
    description: "Supporting medical expenses of an individual who needed a Bone Marrow Transplant for survival through the Ketto platform.",
    images: ["/images/Medical/KettoPlatform_March_2023.jpg"],
    date: "March, 2023",
    fundsProvided: "3,500 INR",
    location: "Ketto Platform"
  },
  {
    id: "impact-abode-joy",
    initiativeId: "shelter",
    title: "Personal Visit & Home-Cooked Lunch",
    category: "Ashram",
    description: "We had the privilege of visiting Abode of Joy, an old-age home dedicated to providing a nurturing environment for its residents. Our team, along with a few enthusiastic volunteers, prepared and shared lunch meals, fostering a sense of community and connection. To further support their well-being, we arranged a physiotherapy session, led by our friend and professional physiotherapist, Suriya. The day was a testament to the warmth that small acts of kindness can bring, leaving both the residents and our team with cherished memories.",
    images: [
      "/images/Abode_of_Joy-2022/Activity_Poster.jpg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-1.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-2.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-3.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-4.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-5.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-6.jpeg",
      "/images/Abode_of_Joy-2022/PhotosTakenAtTheAshram-7.jpeg"
    ],
    date: "May, 2022",
    fundsProvided: "Crowdfunded Essentials",
    location: "Abode of Joy"
  },
  {
    id: "impact-don-bosco-2022",
    initiativeId: "shelter",
    title: "Dinner Sponsorship & Visit",
    category: "Ashram",
    description: "We visited Don Bosco Care Home with our family, engaging with the children and sponsoring a special dinner. We contributed 3,500 INR in cash to support their needs, spending quality time sharing joy and smiles.",
    images: [
      "/images/Don_Bosco_2022/Don_Bosco_2022.jpeg",
      "/images/Don_Bosco_2022/Don_Bosco_2022_1.jpeg",
      "/images/Don_Bosco_2022/Don_Bosco_2022_2.jpeg",
      "/images/Don_Bosco_2022/Don_Bosco_2022_3.jpeg",
      "/images/Don_Bosco_2022/Don_Bosco_2022_4.jpeg"
    ],
    date: "May, 2022",
    fundsProvided: "3,500 INR",
    location: "Don Bosco Care Home"
  },
  {
    id: "impact-edu-july-2022",
    initiativeId: "education",
    title: "Academic Year Support",
    category: "Education",
    description: "Providing financial assistance for school fees to break the cycle of poverty for children facing extreme hardship. We successfully covered the student’s Term III & Term IV tuition fee for the Academic year 2021-2022. We really appreciate every single one of you who donated to help with the student's tuition ❤️🤝",
    images: ["/images/Education/Individual_Education_Support_02.jpeg"],
    date: "July, 2022",
    fundsProvided: "11,830 INR",
    location: "School Tuition Support"
  },
  {
    id: "impact-cct-june-2022",
    initiativeId: "education",
    title: "Tuition Fees Support",
    category: "Education",
    description: "For the month of June’22, Buuu Foundation was able to provide financial support for a student’s education. We successfully contributed for the first term tuition fees of a student. We want to express our sincere gratitude to all our contributors for your generous donation. Your generosity gives these children the resources they need and opens doors for the next generation.",
    images: ["/images/Children_Charitable_Trust/ChildrenCharitableTrust_June_2022.jpeg"],
    date: "June, 2022",
    fundsProvided: "10,000 INR",
    location: "Children Charitable Trust"
  },
  {
    id: "impact-edu-june-2022",
    initiativeId: "education",
    title: "School Fees Contribution",
    category: "Education",
    description: "Each contribution represents a step toward empowering future generations and breaking social barriers.",
    images: ["/images/Education/Individual_Education_Support_03.jpeg"],
    date: "June, 2022",
    fundsProvided: "12,000 INR",
    location: "School Tuition Support"
  },
  {
    id: "impact-cct-aug-2022",
    initiativeId: "healthcare",
    title: "Heart Surgery Support",
    category: "Medical",
    description: "With immense pleasure, we successfully contributed to the open-heart surgery of a 9-month-old baby at MGM Health Care Hospital, Chennai. Upon receiving the emergency request from The Children Charitable Trust, our team conducted immediate pre-verification checks and verified the situation in person on the day of surgery. Thanks to the overwhelming support from our global contributors, we raised the required funds in just 2-3 days. The surgery was successful, and the child is on the path to a full recovery.",
    images: ["/images/Children_Charitable_Trust/ChildrenCharitableTrust_August_2022.png"],
    date: "August, 2022",
    fundsProvided: "15,000 INR",
    location: "Children Charitable Trust"
  },
  {
    id: "impact-bark-india",
    initiativeId: "shelter",
    title: "Animal Medical Support",
    category: "Animal Welfare",
    description: "Buuu Foundation was able to meet a part of the monthly medical requirement to sick animals in Bark India Charitable Trust.",
    images: [
      "/images/Bark_India_Charitable_Trust/Bark_India_Charitable_Trust_May_2022.jpeg",
      "/images/Bark_India_Charitable_Trust/Bark_India_Charitable_Trust_May_2022_1.jpeg",
      "/images/Bark_India_Charitable_Trust/Bark_India_Charitable_Trust_May_2022_2.jpeg"
    ],
    date: "May, 2022",
    fundsProvided: "5,000 INR",
    location: "Bark India Charitable Trust"
  }
];
