import Level1 from '../../assets/Images/img1.excalidraw.svg';
import Level2 from '../../assets/Images/img2.excalidraw.svg';
import Level3 from '../../assets/Images/img3.excalidraw.svg';
import Level4 from '../../assets/Images/img4.excalidraw.svg';
import Level5 from '../../assets/Images/img5.excalidraw.svg';
import Level6 from '../../assets/Images/img6.excalidraw.svg';
import Level7 from '../../assets/Images/img7.excalidraw.svg';
import Level8 from '../../assets/Images/img8.excalidraw.svg';

function HangMan({step}) {
    const images=[Level1,Level2,Level3,Level4,Level5,Level6,Level7,Level8];
    return (
        <div className='w-[300px] h-[300px] '>
        <img 
        src={step>= images.length ? images[images.length-1]:images[step]}
        />

        </div>

    )
}

export default HangMan;