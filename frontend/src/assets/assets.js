import appointment_img from './appointment_img.png'
import header_img from './header_img.svg'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.jpeg'
import contact_us1 from './contact_us1.png'
// import contact_image from './contact_image.png'
import about_image1 from './about_image1.jpg'
// import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
// import doc1 from './doc1.jpg'
import doc1 from './doc1.jpg'
import doc2 from './doc2.jpg'
import doc3 from './doc3.jpg'
import doc4 from './doc4.webp'
import doc5 from './doc5.webp'
import doc6 from './doc6.png'
import doc7 from './doc7.jpg'
import doc8 from './doc8.webp'
import doc9 from './doc9.jpg'
import doc10 from './doc10.avif'
import doc11 from './doc11.png'
import doc12 from './doc12.avif'
import doc13 from './doc13.jpg'
import doc14 from './doc14.png'
import doc15 from './doc15.jpg'
import doc16 from './doc16.webp'
import doc17 from './doc17.webp'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    // contact_image,
    contact_us1,
    about_image1,
    // about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians ',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Rajesh Kumar',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '12 Years',
    about: 'Dr. Rajesh Kumar provides comprehensive medical care with a focus on preventive medicine and patient wellness.',
    fees: 700,
    address: {
      line1: 'Sector 22',
      line2: 'Dwarka, New Delhi, India',
    },
  },
  {
    _id: 'doc2',
    name: 'Dr. Neha Sharma',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '8 Years',
    about: 'Experienced Gynecologist specializing in women’s health and prenatal care, practicing in Mumbai.',
    fees: 850,
    address: {
      line1: 'Bandra West',
      line2: 'Mumbai, Maharashtra, India',
    },
  },
  {
    _id: 'doc3',
    name: 'Dr. Anjali Singh',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS, Dermatology',
    experience: '6 Years',
    about: 'Dr. Anjali Singh is an expert in skin care treatments and cosmetic dermatology in Bengaluru.',
    fees: 500,
    address: {
      line1: 'MG Road',
      line2: 'Bengaluru, Karnataka, India',
    },
  },
  {
    _id: 'doc4',
    name: 'Dr. Rahul Patil',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD',
    experience: '7 Years',
    about: 'Dr. Rahul Patil dedicated to child health care and immunizations in Pune.',
    fees: 600,
    address: {
      line1: 'Shivajinagar',
      line2: 'Pune, Maharashtra, India',
    },
  },
  {
    _id: 'doc5',
    name: 'Dr. Priya Menon',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '10 Years',
    about: 'Neurology specialist focusing on brain and nervous system disorders in Chennai.',
    fees: 900,
    address: {
      line1: 'T Nagar',
      line2: 'Chennai, Tamil Nadu, India',
    },
  },
  {
    _id: 'doc6',
    name: 'Dr. Sanjay Kulkarni',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '12 Years',
    about: 'Experienced neurologist providing treatment for neurodegenerative diseases in Hyderabad.',
    fees: 550,
    address: {
      line1: 'Banjara Hills',
      line2: 'Hyderabad, Telangana, India',
    },
  },
  {
    _id: 'doc7',
    name: 'Dr. Kavita Sharma',
    image: doc7,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '9 Years',
    about: 'General physician specializing in primary health care and preventive medicine in Jaipur.',
    fees: 650,
    address: {
      line1: 'Malviya Nagar',
      line2: 'Jaipur, Rajasthan, India',
    },
  },
  {
    _id: 'doc8',
    name: 'Dr. Ankit Verma',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '7 Years',
    about: 'Expert in gynecology focusing on prenatal and postnatal care in Lucknow.',
    fees: 750,
    address: {
      line1: 'Gomti Nagar',
      line2: 'Lucknow, Uttar Pradesh, India',
    },
  },
  {
    _id: 'doc9',
    name: 'Dr. Meera Joshi',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS, Dermatology',
    experience: '5 Years',
    about: 'Skilled dermatologist offering treatments for skin disorders in Ahmedabad.',
    fees: 500,
    address: {
      line1: 'Navrangpura',
      line2: 'Ahmedabad, Gujarat, India',
    },
  },
  {
    _id: 'doc10',
    name: 'Dr. Rohit Singh',
    image: doc10,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD',
    experience: '8 Years',
    about: 'Dedicated pediatrician committed to child healthcare in Chandigarh.',
    fees: 700,
    address: {
      line1: 'Sector 17',
      line2: 'Chandigarh, India',
    },
  },
  {
    _id: 'doc11',
    name: 'Dr. Sneha Nair',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS, DM',
    experience: '10 Years',
    about: 'Renowned neurologist focusing on neurorehabilitation in Kochi.',
    fees: 850,
    address: {
      line1: 'Marine Drive',
      line2: 'Kochi, Kerala, India',
    },
  },
  {
    _id: 'doc12',
    name: 'Dr. Sadaf Aziz ',
    image: doc12,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD',
    experience: '11 Years',
    about: 'Gastroenterologist specializing in digestive system disorders in Bengaluru.',
    fees: 900,
    address: {
      line1: 'Koramangala',
      line2: 'Bengaluru, Karnataka, India',
    },
  },
  {
    _id: 'doc13',
    name: 'Dr. Reema Desai',
    image: doc13,
    speciality: 'General Physician',
    degree: 'MBBS, MD',
    experience: '10 Years',
    about: 'Experienced general physician providing holistic healthcare in Surat.',
    fees: 600,
    address: {
      line1: 'Adajan',
      line2: 'Surat, Gujarat, India',
    },
  },
  {
    _id: 'doc14',
    name: 'Dr. Ubaid Rehman',
    image: doc14,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS',
    experience: '8 Years',
    about: 'Trusted gynecologist specializing in fertility and prenatal care in New Delhi.',
    fees: 800,
    address: {
      line1: 'Lajpat Nagar',
      line2: 'New Delhi, India',
    },
  },
  {
    _id: 'doc15',
    name: 'Dr. Nuzhat Faisal Khan',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS, Dermatology',
    experience: '11 Years',
    about: 'Dermatologist with expertise in skin care and cosmetic treatments in Mumbai.',
    fees: 550,
    address: {
      line1: 'Sector 25',
      line2: 'Indira Nagar, Lucknow, India',
    },
  },
  {
    _id: 'doc16',
    name: 'Dr. Rizwan Abbas',
    image: doc16,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD',
    experience: '9 Years',
    about: 'Dr. Rizwan Abbas dedicated to child health care and immunizations in New Delhi.',
    fees: 650,
    address: {
      line1: 'Shiv Nagar',
      line2: 'New Delhi, India',
    },
  },
  {
    _id: 'doc12',
    name: 'Dr. Farah Nadeem ',
    image: doc17,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MS',
    experience: '10 Years',
    about: 'Gastroenterologist specializing in digestive system disorders in Jammu & Kashmir.',
    fees: 450,
    address: {
      line1: 'Baramulla',
      line2: 'Baramulla Town, Jammu & Kashmir, India',
    },
  },
];

