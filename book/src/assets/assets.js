// Import all assets here
import appointment_img from './a.png';
import header_img from './g.png';
import group_profiles from './gg.png';
import profile_pic from './p.png';
import logo from './logo1.png';
import contact_img from './c.png';
import about_img from './ab.png';
import dropdown_icon from './drop.png';
import menu_icon from './me.png';
import cross_icon from './cross.png';
import chats_icon from './chats.png';
import verified_icon from './v.png';
import arrow_icon from './arrow1.png';
import info_icon from './in.png';
import upload_icon from './u.png';
import stripe_logo from './stripe.png';
import razorpay_logo from './r.png';
import doc1 from './d1.png';
import doc2 from './d2.png';
import doc4 from './d4.png';
import doc5 from './d5.png';
import doc6 from './d6.png';
import doc7 from './d7.png';
import doc8 from './d8.png';
import doc9 from './d9.png';
import doc10 from './d10.png';
import doc11 from './d11.png';
import doc12 from './d12.png';
import doc14 from './d14.png';
import doc15 from './d15.png';
// import doc16 from './d16.png';
import doc17 from './d17.png';
import gp from './gp1.png';
import gp2 from './gp22.png';
import gp4 from './gp44.png';
import gp5 from './gp55.png';
import gp8 from './gp88.png';


// Specifications for specialties
export const specificationsData = [
  { speciality: "General Physician", image: gp },
  { speciality: "General Surgeon", image: gp2 },
  { speciality: "Pediatrician", image: gp4 },
  { speciality: "Cardiologist", image: gp5 },
  { speciality: "Dermatologist", image: gp8 },
  
];

// Export all assets for use in other components
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
  contact_img,
  about_img,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};
export const specifications = specificationsData;


// Doctor data
export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'General Physician',
    degree: 'MBBS',
    experience: '4 years',
    fees: 50,
    about: 'Dr. Richard James specializes in diagnosing and treating a wide range of general health conditions. He is known for his compassionate care and patient-centric approach.',
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Sarah Thompson',
    image: doc2,
    speciality: 'General Surgeon',
    degree: 'MBBS, MS',
    experience: '8 years',
    fees: 100,
    about: 'Dr. Sarah Thompson is a highly skilled general surgeon with extensive experience in performing surgeries ranging from routine procedures to complex cases.',
    address: {
      line1: '23rd Street, Kensington',
      line2: 'West Avenue, London'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Michael Roberts',
    image: doc4,
    speciality: 'Pediatrician',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '6 years',
    fees: 60,
    about: 'Dr. Michael Roberts is a pediatric specialist providing expert care for infants, children, and adolescents. He focuses on preventive care and early diagnosis.',
    address: {
      line1: '10th Avenue, Green Park',
      line2: 'East Side, London'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Emma Watson',
    image: doc5,
    speciality: 'Cardiologist',
    degree: 'MBBS, MD (Cardiology)',
    experience: '10 years',
    fees: 150,
    about: 'Dr. Emma Watson is a leading cardiologist with over a decade of experience in diagnosing and treating heart diseases. She is renowned for her expertise in cardiovascular care.',
    address: {
      line1: '12th Street, Heartland',
      line2: 'City Center, London'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. William Anderson',
    image: doc6,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '7 years',
    fees: 80,
    about: 'Dr. William Anderson offers a comprehensive range of dermatology services, focusing on skin conditions, treatments, and cosmetic procedures.',
    address: {
      line1: '45th Cross, Skin Lane',
      line2: 'Downtown, London'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Olivia Smith',
    image: doc7,
    speciality: 'Orthopedic Surgeon',
    degree: 'MBBS, MS (Orthopedics)',
    experience: '12 years',
    fees: 120,
    about: 'Dr. Olivia Smith is a renowned orthopedic surgeon specializing in musculoskeletal disorders, joint replacements, and sports injuries.',
    address: {
      line1: 'Park Avenue, East Block',
      line2: 'City Center, London'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. James Wilson',
    image: doc8,
    speciality: 'Neurologist',
    degree: 'MBBS, MD (Neurology)',
    experience: '9 years',
    fees: 140,
    about: 'Dr. James Wilson has expertise in treating neurological disorders, including headaches, epilepsy, and neurodegenerative diseases.',
    address: {
      line1: '7th Avenue, Neuro Tower',
      line2: 'Science Park, London'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Charlotte Moore',
    image: doc9,
    speciality: 'Ophthalmologist',
    degree: 'MBBS, MS (Ophthalmology)',
    experience: '11 years',
    fees: 90,
    about: 'Dr. Charlotte Moore is a skilled ophthalmologist, treating a variety of eye conditions and performing surgeries such as cataract removal and LASIK.',
    address: {
      line1: 'Eye Clinic Road, Vision Tower',
      line2: 'West Block, London'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Ethan Taylor',
    image: doc10,
    speciality: 'Gynecologist',
    degree: 'MBBS, MD (Gynecology)',
    experience: '15 years',
    fees: 130,
    about: 'Dr. Ethan Taylor is an experienced gynecologist offering expert care in women’s reproductive health, prenatal care, and gynecological surgeries.',
    address: {
      line1: 'Rose Avenue, Women’s Health Center',
      line2: 'Northern District, London'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Grace Johnson',
    image: doc11,
    speciality: 'Endocrinologist',
    degree: 'MBBS, MD (Endocrinology)',
    experience: '13 years',
    fees: 110,
    about: 'Dr. Grace Johnson is an endocrinologist specializing in hormone-related disorders such as diabetes, thyroid diseases, and metabolic disorders.',
    address: {
      line1: 'Endocrine Lane, Medical Park',
      line2: 'South Tower, London'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. David Lee',
    image: doc12,
    speciality: 'Gastroenterologist',
    degree: 'MBBS, MD (Gastroenterology)',
    experience: '10 years',
    fees: 95,
    about: 'Dr. David Lee is a gastroenterologist providing care for digestive system disorders including liver, pancreas, and gastrointestinal tract issues.',
    address: {
      line1: 'Digestive Clinic, 18th Avenue',
      line2: 'West Wing, London'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Amelia Walker',
    image: doc14,
    speciality: 'Psychiatrist',
    degree: 'MBBS, MD (Psychiatry)',
    experience: '14 years',
    fees: 100,
    about: 'Dr. Amelia Walker specializes in mental health care, helping patients manage conditions such as depression, anxiety, and bipolar disorders.',
    address: {
      line1: 'Mental Health Center, 5th Street',
      line2: 'East Sector, London'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Samuel Lewis',
    image: doc15,
    speciality: 'Oncologist',
    degree: 'MBBS, MD (Oncology)',
    experience: '9 years',
    fees: 160,
    about: 'Dr. Samuel Lewis is an oncologist with expertise in cancer treatment, including chemotherapy, radiation, and targeted therapy.',
    address: {
      line1: 'Cancer Treatment Unit, City Hospital',
      line2: 'Central Block, London'
    }
  },
  {
    _id: 'doc17',
    name: 'Dr. Benjamin Miller',
    image: doc17,
    speciality: 'Nephrologist',
    degree: 'MBBS, MD (Nephrology)',
    experience: '12 years',
    fees: 125,
    about: 'Dr. Benjamin Miller is a nephrologist specializing in kidney health, treating conditions such as kidney stones, chronic kidney disease, and dialysis.',
    address: {
      line1: 'Kidney Health Center, Water Street',
      line2: 'Northern Block, London'
    }
  }
  
];
