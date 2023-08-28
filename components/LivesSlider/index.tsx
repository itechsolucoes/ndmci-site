//Dependencies
import React , { useState } from 'react';
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

//Styled
import {
  Container,
  Content,
  Text,
  Slider,
  Video,
  SlideContainer,
  Prev,
  Next,
  Div
} from './styles'

//Components
import SubTitle from '../SubTitle';

//Icons
import { ChevronLeft, ChevronRight } from "react-iconly";
import { getWindow } from 'ssr-window';

const LivesSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sizeWindow, setSzeWindow] = useState<number>(getWindow().innerWidth);

  const windows = getWindow();
  windows.addEventListener("resize", () => {
    setSzeWindow(getWindow().innerWidth);
  });

  const slidePerView = sizeWindow > 1500 ? 4 : sizeWindow > 1200 ? 3 : sizeWindow > 900 ? 2 : 1;


  const [ sliderRef, instanceRef ] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    rtl: false,
    slides: { perView: slidePerView },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: {
      min: -5,
      max: 5,
    },
    created() {
      setLoaded(true)
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })


  return (
    <Container>
      <Content className="container">
        <Text>
          <SubTitle title="Painel Canábico" />
          <p>
            O painel Canábico oferece encontros entre especialistas do NDMCI para discutir e debater, de forma ampla e democrática, os tratamentos à base de Cannabis Medicinal, além de estudos científicos e respostas terapêuticas a algumas patologias especificas, bem como mostragem de dados e discussão de casos clínicos advindos de estudos realizados através de evidências de casos reais.
          </p>
        </Text>
        {sizeWindow > 700 && loaded && (
          <Video>
            <iframe height="250" width="100%" src="https://www.youtube.com/embed/GBERUacJG7s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Video>
          )}
      </Content>
      <Div>

        <SlideContainer className="navigation-wrapper">
          {!!instanceRef &&
            <Slider ref={sliderRef} className="keen-slider">
            {sizeWindow < 700 && loaded && (
              <Video className="keen-slider__slide number-slide0" key={1}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/GBERUacJG7s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
               )}
              <Video className="keen-slider__slide number-slide1" key={2}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/oidkJJ-n_K4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
              <Video className="keen-slider__slide number-slide2" key={3}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/DJg3vLYW-F8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
              <Video className="keen-slider__slide number-slide3" key={4}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/qsfKoV7n8Ag" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
              <Video className="keen-slider__slide number-slide4" key={5}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/gljcFT9qxuA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
              <Video className="keen-slider__slide number-slide5" key={6}>
                <iframe height="250" width="100%" src="https://www.youtube.com/embed/sN3F7b5Q9sQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </Video>
            </Slider>

          }
          {loaded && instanceRef.current && (
            <>
              <Prev
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              >
                <ChevronLeft set="light"/>
              </Prev>

              <Next
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              >
                <ChevronRight set="light"/>
              </Next>
            </>
          )}
        </SlideContainer>
        </Div>
    </Container>
  )
}

export default LivesSlider;