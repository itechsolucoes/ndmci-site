 //Dependencies
import Image from "next/image"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useEffect, useState } from 'react';

//Styled
import {
  Slider,
  Medic,
  Photo,
  Content,
  Header,
  Name,
  Clinic,
  CRM,
  Infos,
  Info,
  MiniCV,
  ButtonLink,
  Prev,
  Next
} from './styles'

//Components
import PlaceholderImage from "../PlaceholderImage/placeholder-blur"

//Icons
import { IconLocation, IconMark, IconMoney } from "../Icons"
import { ChevronLeft, ChevronRight } from "react-iconly";

//Props
import { MedicProps } from "./props";

type DoctorsSliderProps = {
  medics: Array<MedicProps>
}

const DoctorsSlider = ( { medics } : DoctorsSliderProps ) => {
  const [ listMedics, setListMedics ] = useState<Array<MedicProps>>([]);
  const [ currentSlide, setCurrentSlide ] = useState(0)
  const [ loaded, setLoaded ] = useState(false)
  const [ sliderRef, instanceRef ] = useKeenSlider<HTMLDivElement>({
      loop: false,
      mode: "snap",
      slides: { perView: "auto", spacing: 15 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })

  useEffect( () => {
    console.log('medics', medics);
  }, [medics]);

  if(!medics) return (<></>);

  return (
      <>
        <Slider ref={sliderRef} className="keen-slider">
          {!!instanceRef && medics && medics.map( (medic: MedicProps) =>
            <Medic className="keen-slider__slide" key={medic.id}>
              <Photo>
                <Image
                  src={medic.url_imagem}
                  alt={medic.nome}
                  loading="eager"
                  layout="fill"
                  placeholder='blur'
                  blurDataURL={PlaceholderImage(412,433)}
                  objectFit="cover"
                  objectPosition="top"
                />
              </Photo>
              <Content>
                <Header>
                  <div>
                    <Name> {medic?.titulo} {medic.nome} </Name>
                    <Clinic> {medic?.especialidades.map( (especialidade: string, i:number) =>  `${especialidade}${i + 1 == medic.especialidades.length ? '' : i + 3 > medic.especialidades.length ? ' e ' : ', '}` )} </Clinic>
                  </div>
                </Header>
                <Infos>
                  <Info>
                    <IconLocation width={12} height={14} />
                    Cidade: {medic.cidade}/{medic.uf}
                  </Info>
                  <Info>
                    <IconMoney width={12} height={14} />
                    Valor da consulta:  R$: {medic.price}
                  </Info>
                </Infos>

                <MiniCV>
                  <div dangerouslySetInnerHTML={{
                      __html: medic.sobre.length > 170 ? medic.sobre.substring(0,170) + '...' : medic.sobre
                    }}></div>
                </MiniCV>

                <a href={`https://atendimento.ndmci.com.br/paciente/agenda/${medic.link}`}>
                  <ButtonLink>
                    Agendar consulta
                  </ButtonLink>
                </a>
              </Content>
            </Medic>
          )}
          <Medic className="keen-slider__slide transparent" key={1999}></Medic>
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
        </Slider>
      </>
  )
}

export default DoctorsSlider;