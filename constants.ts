
import { Service, Review, WorkingHour } from './types';

export const CLINIC_NAME = "MAPSO";
export const DOCTOR_NAME = "MAPSO";
export const PHONE_NUMBER = "+2125000000000";
export const WHATSAPP_NUMBER = "+212600000000";
export const ADDRESS = "Maroc, Casablanca";
export const INSTAGRAM_URL = "https://instagram.com/dentist";
export const MAPS_URL = "https://www.google.com/maps/place/Casablanca/";

export const SERVICES: Service[] = [
  {
    id: "blanchiment",
    title: "تبييض الأسنان",
    description: "تبييض احترافي للحصول على ابتسامة مشرقة وطبيعية بأحدث التقنيات.",
    image: "https://media.istockphoto.com/id/1037081016/photo/womans-teeth-before-and-after-whitening.jpg?b=1&s=612x612&w=0&k=20&c=Vq5NMtHAGEhMSi8qSlqyV-IFC3Acy7cYhNS4RJjjYqQ=",
    icon: "✨",
    videoUrl: "https://communitydental.om/wp-content/uploads/2024/10/Untitled-design-2024-10-03T091626.244.mp4"
  },
  {
    id: "implants",
    title: "زراعة الأسنان",
    description: "استعادة الأسنان المفقودة بشكل دائم وجمالي يضمن لك الراحة والثقة.",
    image: "https://i.postimg.cc/BvSgPvTW/Implants-dentaires-pas-cher-a-letranger-1536x864.webp",
    icon: "🦷",
    videoUrl: "https://communitydental.om/wp-content/uploads/2024/09/x-14-3.mp4"
  },
  {
    id: "orthodontie",
    title: "تقويم الأسنان",
    description: "تصحيح اصطفاف الأسنان للأطفال والكبار للحصول على مظهر متناسق وصحي.",
    image: "https://images.pexels.com/photos/6528909/pexels-photo-6528909.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: "📏"
  },
  {
    id: "soins",
    title: "علاج التسوس",
    description: "علاج سريع وبدون ألم لحساسية وتسوس الأسنان مع الحفاظ على بنية السن.",
    image: "https://i.postimg.cc/T3SsxfVR/imgi-24-Dental-Caries-Cavity-2.jpg",
    icon: "🛡️",
    videoUrl: "https://communitydental.om/wp-content/uploads/2024/09/Untitled-design-2024-09-19T112237.780-1.mp4"
  },
  {
    id: "detartrage",
    title: "تنظيف الأسنان وإزالة الجير",
    description: "إزالة الجير والبلاك للحفاظ على صحة اللثة وانتعاش الفم.",
    image: "https://i.postimg.cc/MHVYxqgY/Detartrage-polissage.webp",
    icon: "🧼",
    videoUrl: "https://communitydental.om/wp-content/uploads/2024/10/Untitled-design-2024-10-03T091626.244.mp4"
  },
  {
    id: "extraction",
    title: "خلع الأسنان",
    description: "خلع آمن للأسنان المتضررة مع عناية خاصة لتخفيف الألم وتسريع الشفاء.",
    image: "https://i.postimg.cc/kgBBtfgm/Extraction-dentaire.jpg",
    icon: "🗜️",
    videoUrl: "https://communitydental.om/wp-content/uploads/2024/09/Untitled-design-2024-09-19T115154.745.mp4"
  }
];

export const WORKING_HOURS: Record<number, WorkingHour> = {
  1: { day: "الاثنين", open: "08:30", close: "21:00" },
  2: { day: "الثلاثاء", open: "08:30", close: "21:00" },
  3: { day: "الأربعاء", open: "08:30", close: "21:00" },
  4: { day: "الخميس", open: "08:30", close: "21:00" },
  5: { day: "الجمعة", open: "00:00", close: "00:00", isClosed: true },
  6: { day: "السبت", open: "08:30", close: "21:00" },
  0: { day: "الأحد", open: "09:00", close: "21:00" },
};

export const REVIEWS: Review[] = [
  { id: 1, user: "أحمد العماني", rating: 5, comment: "أفضل عيادة أسنان في المنطقة! تعامل فريق MAPSO راقي جداً والتقنيات حديثة.", date: "منذ أسبوع" },
  { id: 2, user: "سارة البلوشي", rating: 5, comment: "تجربة ممتازة في تبييض الأسنان، النتائج كانت مبهرة ومن أول جلسة.", date: "منذ شهر" },
  { id: 3, user: "محمد الرئيسي", rating: 5, comment: "العيادة نظيفة جداً والالتزام بالمواعيد دقيق. شكراً MAPSO.", date: "منذ أسبوعين" },
];
