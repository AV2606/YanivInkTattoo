import { StaticImageData } from 'next/image';
import Photo1 from '../../assets/showroom/photo1 (2).jpg';
import Photo2 from '../../assets/showroom/photo1 (3).jpg';
import Photo3 from '../../assets/showroom/photo1 (4).jpg';
import Photo4 from '../../assets/showroom/photo1 (5).jpg';
import Photo5 from '../../assets/showroom/photo1 (6).jpg';


/**
 * Get showroom photos, should use a backend service to get the photos
 */
export function getShowroomPhotos(): { image: StaticImageData, title: string }[] {
    const arr = [{ image: Photo1, title: "Photo 1" },
    { image: Photo2, title: "Photo 2" },
    { image: Photo3, title: "Photo 3" },
    { image: Photo4, title: "Photo 4" },
    { image: Photo5, title: "Photo 5" }
    ];
    return arr;
}