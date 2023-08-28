//Dependencies
import { useEffect, useState } from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic';

//Styles
import {
  HeaderTitle,
  ContainerPartners,
  ContainerDoctor
} from './styles';

//Components
import Layout from '../components/Layout'
import BannerHome from '../components/BannerHome'
import SubTitle from '../components/SubTitle';

//services
import { getAllDoctors, getSpecsDoctors } from '../services/users';
import { MedicProps } from '../components/DoctorsSlider/props';

//Styles and Icons ANTD
import "antd/dist/antd.css"

const AboutSimple = dynamic(() => import ('../components/AboutSimple'), { ssr: true });
const AboutMissionSimple = dynamic(() => import ('../components/AboutMissionSimple'), { ssr: true });
const Steps = dynamic(() => import ('../components/Steps'), { ssr: true });
const Newsletter = dynamic(() => import ('../components/Newsletter'), { ssr: true });
const LivesSlider = dynamic(() => import ('../components/LivesSlider'), { ssr: true });
const Partners = dynamic(() => import ('../components/Partners'), { ssr: true });
const Contact = dynamic(() => import ('../components/Contact'), { ssr: true });
const DoctorsSlider = dynamic(() => import ('../components/DoctorsSlider'), { ssr: true });

DoctorsSlider

export default function Home() {
  const [ medics, setMedics ] = useState<Array<MedicProps>>([]);

  useEffect( () => {
    getListDoctors();
  }, [])

  const getListDoctors = async () => {
    try{
      const medic = await getAllDoctors();
      const medics = [];
      await Promise.all(medic?.data?.list.map(async(medic) => {
        const specs = await getSpecsDoctors(medic.id);
        const current = specs?.data.list;

        if(!current.length) return;

        medics.push({
          ...medic,
          link: current[0].id,
          spec: current[0].nome,
          price: current[0].valor_consulta,
        })
      }));

      setMedics(medics);
    } catch(e) {
      console.log('GET', e);
    }
  }

  return (
    <>
      <Layout>
        <>
          <Head>
            <title> NDMCI - Núcleo de Desenvolvimento em Medicina Canabinóide e Integrativa </title>
          </Head>

          {/* Banner Home */}
          <BannerHome />

          {/* Sobre */}
          <div className="space-header" id="quem-somos"></div>
          <AboutSimple />

          {/* Missão e valores */}
          {/* <AboutMissionSimple /> */}

          {/* Passo a passo */}
          <div className="space-header" id="participe"></div>
          <Steps/>

          {/* Doutores */}
          <div className="space-header" id="medicos"></div>
          <ContainerDoctor>
            <HeaderTitle>
              <SubTitle title="Nossos Médicos" />
              <p> Escolha do médico de acordo com a especialidade e patologia a ser tratada. </p>
            </HeaderTitle>
            {!!medics.length && <DoctorsSlider medics={medics}/>}
          </ContainerDoctor>

          {/* Newsletter */}
          <Newsletter />

          {/* Lives */}
          <div className="space-header" id="lives"></div>
          <LivesSlider />

          <div className="space-header" id="patrocinadores"></div>
          <ContainerPartners>
            <HeaderTitle>
              <SubTitle title="Apoiadores" />
              <p> Conheça as empresas que são nossas parceiras </p>
            </HeaderTitle>

            <Partners />
          </ContainerPartners>

          {/* Contact */}
          <div className="space-header" id="contato"></div>
          <div id="duvida"></div>
          <Contact/>
        </>
      </Layout>
    </>
  )
}
