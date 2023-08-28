//Styled
import { ContainerNav, Nav, List, Item } from "./styles";

//Dependencies
import Image from "next/image";
import Link from "next/link";

//Components
import PlaceholderImage from "../PlaceholderImage/placeholder-blur";

const Header = () => {
    return (
        <ContainerNav>
            <Nav className="container">
                <List>
                    <Item className="logo">
                        <Image
                            src="/assets/images/logo.png"
                            alt="NDMCI - Núcleo de Desenvolvimento em Medicina Canabinóide e Integrativa"
                            loading="eager"
                            layout="fixed"
                            width={130}
                            height={35}
                            placeholder="blur"
                            blurDataURL={PlaceholderImage(120, 23)}
                            objectPosition="center top"
                        />
                    </Item>

                    <Item>
                        <Link href="#quem-somos">Quem somos</Link>
                    </Item>

                    <Item>
                        <Link href="#participe">Participar do Programa</Link>
                    </Item>

                    <Item>
                        <Link href="#medicos">Médicos</Link>
                    </Item>

                    <Item>
                        <Link href="#contato"> Pergunte ao Especialista </Link>
                    </Item>

                    <Item>
                        <a
                            target="new"
                            href="https://atendimento.ndmci.com.br/login"
                        >
                            Espaço paciente
                        </a>
                    </Item>

                    <Item>
                        <a
                            target="new"
                            href="https://atendimento.ndmci.com.br/login"
                        >
                            Espaço Médico
                        </a>
                    </Item>

                    <Item>
                        <Link href="#patrocinadores"> Apoiadores </Link>
                    </Item>

                    <Item>
                        <Link href="#contato"> Fale conosco </Link>
                    </Item>
                </List>
            </Nav>
        </ContainerNav>
    );
};

export default Header;
