//Dependencies
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"
import Link from "next/link"

//Styled
import {
  Slider,
  Partner,
  Photo
} from './styles'

//Components
import PlaceholderImage from "../PlaceholderImage/placeholder-blur"
import { useState } from "react"
import { getWindow } from "ssr-window"
const animation = { duration: 30000, easing: (t: number) => t }
const Partners = () => {

  const [sizeWindow, setSzeWindow] = useState<number>(getWindow().innerWidth);

  const windows = getWindow();
  windows.addEventListener("resize", () => {
    setSzeWindow(getWindow().innerWidth);
  });

  const slidePerView = sizeWindow > 1500 ? "auto" : sizeWindow > 1200 ? 5 : sizeWindow > 700 ? 3 : 1;
  const spacingPerview = sizeWindow < 700 ? 10 : 25


  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    rtl: false,
    slides: {
      perView: slidePerView,
      spacing: spacingPerview,
      origin: "center",
    },
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })

  return (
    <Slider ref={sliderRef} className="keen-slider">
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://tegrapharma.com/" target="new">
            <Image
              src='/assets/images/partners/AF_Logo_Tegra_Pharma_cores.png'
              alt="Tegrapharma"
              loading="eager"
              layout="fixed"
              width={250}
              height={150}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://www.farmausa.com/" target="new">
            <Image
              src='/assets/images/partners/secundária.png'
              alt="Farma USA"
              loading="eager"
              layout="fixed"
              width={250}
              height={150}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://www.cannten.com.br/" target="new">
            <Image
              src='/assets/images/partners/cannten-aprovado.png'
              alt="CannTen"
              loading="eager"
              layout="fixed"
              width={250}
              height={150}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://www.remederi.com.br/" target="new">
            <Image
              src='/assets/images/partners/remederi.png'
              alt="Remederi"
              loading="eager"
              layout="fixed"
              width={250}
              height={150}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://www.cebrid.com.br/" target="new">
            <Image
              src='/assets/images/partners/cebrid.png'
              alt="Cebrid"
              loading="eager"
              layout="fixed"
              width={250}
              height={150}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
      <Partner className="keen-slider__slide">
        <Photo>
          <a href="https://www.unifesp.br/" target="new">
            <Image
              src='/assets/images/partners/Unifesp_secundaria_policromia_RGB.png'
              alt="Unifesp"
              loading="eager"
              layout="fixed"
              width={200}
              height={180}
              placeholder='blur'
              blurDataURL={PlaceholderImage(224,62)}
              objectFit="contain"
              objectPosition="center"
            />
          </a>
        </Photo>
      </Partner>
    </Slider>
  )
}

export default Partners;


