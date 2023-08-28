//Styled
import {
  FullBanner,
  Container,
  Content,
  H1
} from './styles'

//Dependencies
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

//Components
import PlaceholderImage from "../PlaceholderImage/placeholder-blur"
import { useEffect, useState } from 'react';

const BannerHome = ({}) => {
  const [windowDimensions, setWindowDimensions] = useState<{
    width: Number,
    height: Number,
  }>();

  const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
  }

  useEffect(() => {
    setWindowDimensions(getWindowDimensions())
  }, []);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1,
    },
    loop: true,
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 5000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    },
  ])

  return (
    <div ref={ref} className="keen-slider">
      <FullBanner className="keen-slider__slide">
        <Container>
          <a href="https://www.youtube.com/channel/UC99PcZVfbtnPcyxbJ2Mt28w/videos " target="new">
            { windowDimensions?.width > 980 ?
              <Image
                src='/assets/images/banners/banners-agende.png'
                alt=""
                loading="eager"
                layout="fill"
                placeholder='blur'
                blurDataURL={PlaceholderImage(1000,540)}
                objectPosition="center"
              />
            :
              <Image
                src='/assets/images/banners/banners-agende.png'
                alt=""
                loading="eager"
                layout="fill"
                placeholder='blur'
                blurDataURL={PlaceholderImage(1000,540)}
                objectPosition="center"
              />
            }
          </a>
        </Container>
      </FullBanner>
      <FullBanner className="keen-slider__slide">
        <Container>
          <a href="https://www.youtube.com/embed/sN3F7b5Q9sQ" target="new">
            { windowDimensions?.width > 980 ?
              <Image
                src='/assets/images/banners/banner-video.png'
                alt=""
                loading="eager"
                layout="fill"
                placeholder='blur'
                blurDataURL={PlaceholderImage(1000,540)}
                objectPosition="center"
              />
            :
              <Image
                src='/assets/images/banners/banner-video.png'
                alt=""
                loading="eager"
                layout="fill"
                placeholder='blur'
                blurDataURL={PlaceholderImage(1000,540)}
                objectPosition="center"
              />
            }
          </a>
        </Container>
      </FullBanner>

      {/* <FullBanner className="keen-slider__slide">
        <Container>
          <a href="https://sistemas.unifesp.br/acad/proec-siex/index.php?page=INS&acao=2&code=22518" target="new">
            { windowDimensions?.width > 980 ?
              <Image
                src='/assets/images/banners/banner-home-desktop-painel-2.png'
                alt=""
                loading="eager"
                layout="fill"
                placeholder='blur'
                blurDataURL={PlaceholderImage(1000,540)}
                objectPosition="center"
              />
              :
                <Image
                  src='/assets/images/banners/banner-home-mobile-painel-2.png'
                  alt=""
                  loading="eager"
                  layout="fill"
                  placeholder='blur'
                  blurDataURL={PlaceholderImage(1000,540)}
                  objectPosition="center"
                />
            }
          </a>
        </Container>
      </FullBanner> */}

      {/* <FullBanner className="keen-slider__slide">
        <Container>
          <a href="https://sistemas.unifesp.br/acad/proec-siex/index.php?page=INS&acao=2&code=22518" target="new">
              { windowDimensions?.width > 980 ?
                <Image
                  src='/assets/images/banners/banner-home-desktop-painel-3.png'
                  alt=""
                  loading="eager"
                  layout="fill"
                  placeholder='blur'
                  blurDataURL={PlaceholderImage(1000,540)}
                  objectPosition="center"
                />
              :
                <Image
                  src='/assets/images/banners/banner-home-mobile-painel-3.png'
                  alt=""
                  loading="eager"
                  layout="fill"
                  placeholder='blur'
                  blurDataURL={PlaceholderImage(1000,540)}
                  objectPosition="center"
                />
            }
          </a>
        </Container>
      </FullBanner> */}
    </div>
  )
}


// const BannerHome = ({}) => {
//   return (
//     <FullBanner>
//       <Container>
//         <Content className="container">
//           <H1>
//             Núcleo de Desenvolvimento em Medicina Canabinóide e Integrativa
//           </H1>
//           <p>
//             O NDMCI é um programa desenvolvido para o estudo, pesquisa e divulgação da cannabis medicinal no Brasil
//           </p>
//         </Content>
//       </Container>
//     </FullBanner>
//   )
// }

export default BannerHome;