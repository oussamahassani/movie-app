import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    image :"https://media.senscritique.com/media/000018255739/source_big/Outfall.jpg"
  },
  {
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    image:"https://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/jungle-affiche-bifff.jpg?1523912324"
  },
  {
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    image : "https://www.horreur.net/sites/default/files/upload/escape_room.jpg"
  }
];

const Carousell = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
           <img src={item.image} alt={item.altText}  width = "50%" style={{display:"block",margin:"0px  auto"}} />
        <CarouselCaption className="text-danger" captionimqge={item.image} captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 80%;
              height: 300px;
              background: black;
              margin-left: 150px
            
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Carousell;
