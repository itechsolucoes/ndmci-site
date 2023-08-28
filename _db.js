-- public."SequelizeMeta" definition

-- Drop table

-- DROP TABLE public."SequelizeMeta";

CREATE TABLE public."SequelizeMeta" (
	"name" varchar(255) NOT NULL,
	CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name)
);


-- public.agendamentos definition

-- Drop table

-- DROP TABLE public.agendamentos;

CREATE TABLE public.agendamentos (
	id serial4 NOT NULL,
	data_hora timestamptz NULL,
	id_convenio int4 NULL,
	id_especialidade int4 NULL,
	id_paciente int4 NULL,
	id_profissional int4 NULL,
	id_usuario_atualizacao int4 NULL,
	ocorrencia varchar(255) NULL,
	status varchar(255) NULL,
	tipo varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	id_ambiente text NULL,
	id_consulta text NULL,
	multiplos_usuarios bool NULL,
	presencial bool NULL DEFAULT false,
	queixa varchar(100) NULL,
	CONSTRAINT agendamentos_pkey PRIMARY KEY (id)
);


-- public.agendamentos_informacoes_complementares definition

-- Drop table

-- DROP TABLE public.agendamentos_informacoes_complementares;

CREATE TABLE public.agendamentos_informacoes_complementares (
	id serial4 NOT NULL,
	id_agendamento int4 NULL,
	id_ambiente varchar(255) NULL,
	informacao varchar(9999) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	tipo text NULL,
	id_usuario int4 NULL,
	id_profissional int4 NULL,
	arquivos _varchar NULL,
	CONSTRAINT agendamentos_informacoes_complementares_pkey PRIMARY KEY (id)
);


-- public.agendamentos_informacoes_complementares_bkp100822 definition

-- Drop table

-- DROP TABLE public.agendamentos_informacoes_complementares_bkp100822;

CREATE TABLE public.agendamentos_informacoes_complementares_bkp100822 (
	id serial4 NOT NULL,
	id_agendamento int4 NULL,
	id_ambiente varchar(255) NULL,
	informacao varchar(9999) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	tipo text NULL,
	id_usuario int4 NULL,
	id_profissional int4 NULL,
	arquivos _varchar NULL,
	CONSTRAINT agendamentos_informacoes_complementares_pkey_1 PRIMARY KEY (id)
);


-- public.agendamentos_integracoes definition

-- Drop table

-- DROP TABLE public.agendamentos_integracoes;

CREATE TABLE public.agendamentos_integracoes (
	id serial4 NOT NULL,
	id_agendamento int4 NULL,
	id_ambiente varchar(255) NULL,
	id_integracao int4 NULL,
	valor varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT agendamentos_integracoes_pkey PRIMARY KEY (id)
);


-- public.agendamentos_reservas definition

-- Drop table

-- DROP TABLE public.agendamentos_reservas;

CREATE TABLE public.agendamentos_reservas (
	id serial4 NOT NULL,
	data_hora timestamptz NULL,
	id_ambiente varchar(255) NULL,
	id_paciente int4 NULL,
	id_profissional int4 NULL,
	status varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT agendamentos_reservas_pkey PRIMARY KEY (id)
);


-- public.ambientes definition

-- Drop table

-- DROP TABLE public.ambientes;

CREATE TABLE public.ambientes (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NOT NULL,
	configuracoes jsonb NULL,
	email_usuario_atualizacao varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT ambientes_pkey PRIMARY KEY (id)
);


-- public.ambientes_anamnese definition

-- Drop table

-- DROP TABLE public.ambientes_anamnese;

CREATE TABLE public.ambientes_anamnese (
	id serial4 NOT NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	questao text NULL,
	id_ambiente text NULL,
	CONSTRAINT ambientes_anamnese_pkey PRIMARY KEY (id)
);


-- public.ambientes_termos definition

-- Drop table

-- DROP TABLE public.ambientes_termos;

CREATE TABLE public.ambientes_termos (
	id serial4 NOT NULL,
	termos_de_uso text NULL,
	termos_de_privacidade text NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	id_ambiente text NULL,
	CONSTRAINT ambientes_termos_pkey PRIMARY KEY (id)
);


-- public.ambientes_termos_teleconsulta definition

-- Drop table

-- DROP TABLE public.ambientes_termos_teleconsulta;

CREATE TABLE public.ambientes_termos_teleconsulta (
	id serial4 NOT NULL,
	id_ambiente text NULL,
	termos_teleconsulta text NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT ambientes_termos_teleconsulta_pkey PRIMARY KEY (id)
);


-- public.conselhos definition

-- Drop table

-- DROP TABLE public.conselhos;

CREATE TABLE public.conselhos (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	nome varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT conselhos_pkey PRIMARY KEY (id)
);


-- public.convenios definition

-- Drop table

-- DROP TABLE public.convenios;

CREATE TABLE public.convenios (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	nome varchar(255) NULL,
	url_logotipo varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT convenios_pkey PRIMARY KEY (id)
);


-- public.convenios_especialidades definition

-- Drop table

-- DROP TABLE public.convenios_especialidades;

CREATE TABLE public.convenios_especialidades (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_convenio int4 NULL,
	disponibilidade varchar(255) NULL,
	id_especialidade int4 NULL,
	requer_guia_autorizacao bool NULL,
	requer_solicitacao_medica bool NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT convenios_especialidades_pkey PRIMARY KEY (id)
);


-- public.convenios_integracoes definition

-- Drop table

-- DROP TABLE public.convenios_integracoes;

CREATE TABLE public.convenios_integracoes (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_integracao int4 NULL,
	id_convenio int4 NULL,
	valor varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT convenios_integracoes_pkey PRIMARY KEY (id)
);


-- public.convenios_termos_aceites definition

-- Drop table

-- DROP TABLE public.convenios_termos_aceites;

CREATE TABLE public.convenios_termos_aceites (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_agendamento int4 NULL,
	id_convenio int4 NULL,
	url_imagem_assinatura varchar(255) NULL,
	url_imagem_paciente varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT convenios_termos_aceites_pkey PRIMARY KEY (id)
);


-- public.cupons definition

-- Drop table

-- DROP TABLE public.cupons;

CREATE TABLE public.cupons (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	cupom varchar(255) NULL,
	desconto int4 NULL,
	expiracao timestamptz NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	quantidade_maxima_uso int4 NULL,
	desabilitado bool NULL,
	CONSTRAINT cupons_pkey PRIMARY KEY (id)
);


-- public.cupons_usuarios definition

-- Drop table

-- DROP TABLE public.cupons_usuarios;

CREATE TABLE public.cupons_usuarios (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_cupom int4 NULL,
	id_agendamento int4 NULL,
	id_usuario int4 NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT cupons_usuarios_pkey PRIMARY KEY (id)
);


-- public.emails_enviados definition

-- Drop table

-- DROP TABLE public.emails_enviados;

CREATE TABLE public.emails_enviados (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	corpo varchar(255) NULL,
	destinatario varchar(255) NULL,
	id_agendamento int4 NULL,
	remetente varchar(255) NULL,
	tipo varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	status text NULL,
	CONSTRAINT emails_enviados_pkey PRIMARY KEY (id)
);


-- public.errata_paciente definition

-- Drop table

-- DROP TABLE public.errata_paciente;

CREATE TABLE public.errata_paciente (
	id serial4 NOT NULL,
	id_user int4 NULL,
	errata varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	id_informacoes_complementares varchar NULL,
	id_paciente int4 NULL,
	id_profissional int4 NULL,
	profissional varchar(150) NULL,
	CONSTRAINT errata_paciente_pkey PRIMARY KEY (id)
);


-- public.especialidades definition

-- Drop table

-- DROP TABLE public.especialidades;

CREATE TABLE public.especialidades (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	nome varchar(255) NULL,
	permite_convenio bool NULL,
	permite_particular bool NULL,
	permite_publico bool NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	descricao text NULL,
	url_imagem varchar(255) NULL,
	valor_consulta float8 NULL,
	duracao_consulta text NULL,
	pre_definido bool NULL,
	CONSTRAINT especialidades_pkey PRIMARY KEY (id)
);


-- public.horarios_folgas definition

-- Drop table

-- DROP TABLE public.horarios_folgas;

CREATE TABLE public.horarios_folgas (
	id serial4 NOT NULL,
	data_hora timestamptz NULL,
	id_ambiente varchar(255) NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT horarios_folgas_pkey PRIMARY KEY (id)
);


-- public.integracoes definition

-- Drop table

-- DROP TABLE public.integracoes;

CREATE TABLE public.integracoes (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	chave varchar(255) NULL,
	nome varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT integracoes_pkey PRIMARY KEY (id)
);


-- public.logs_acessos definition

-- Drop table

-- DROP TABLE public.logs_acessos;

CREATE TABLE public.logs_acessos (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_usuario int4 NULL,
	ip varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT logs_acessos_pkey PRIMARY KEY (id)
);


-- public.pagamentos definition

-- Drop table

-- DROP TABLE public.pagamentos;

CREATE TABLE public.pagamentos (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	valor varchar(255) NULL,
	id_agendamento int4 NULL,
	params jsonb NULL,
	response jsonb NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	ip text NULL,
	tipo text NOT NULL,
	gateway text NULL,
	id_cupom_desconto int4 NULL,
	CONSTRAINT pagamentos_pkey PRIMARY KEY (id)
);


-- public.prescricoes definition

-- Drop table

-- DROP TABLE public.prescricoes;

CREATE TABLE public.prescricoes (
	data_hora_criacao timetz NULL,
	data_hora_atualizacao timetz NULL,
	id numeric NOT NULL,
	id_prescricao_integracao numeric NULL,
	id_profissional numeric NULL,
	id_paciente numeric NULL,
	id_agendamento numeric NULL,
	id_ambiente text NULL,
	CONSTRAINT prescricoes_pkey PRIMARY KEY (id)
);


-- public.templates_emails definition

-- Drop table

-- DROP TABLE public.templates_emails;

CREATE TABLE public.templates_emails (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	corpo int4 NULL,
	nome varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT templates_emails_pkey PRIMARY KEY (id)
);


-- public.token_atendimentos definition

-- Drop table

-- DROP TABLE public.token_atendimentos;

CREATE TABLE public.token_atendimentos (
	id serial4 NOT NULL,
	id_agendamento int4 NULL,
	"token" varchar(255) NULL,
	id_ambiente varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	email text NULL,
	expira timestamptz NULL,
	CONSTRAINT token_atendimentos_pkey PRIMARY KEY (id)
);


-- public.usuarios definition

-- Drop table

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id serial4 NOT NULL,
	atende_convenio bool NULL,
	atende_particular bool NULL,
	atende_publico bool NULL,
	ativo bool NULL DEFAULT true,
	bairro varchar(255) NULL,
	celular varchar(255) NULL,
	cidade varchar(255) NULL,
	codigo_postal varchar(255) NULL,
	complemento varchar(255) NULL,
	cpf varchar(255) NULL,
	dados_complementares jsonb NULL,
	data_nascimento timestamptz NULL,
	email varchar(255) NULL,
	endereco varchar(255) NULL,
	estado_civil varchar(255) NULL,
	id_ambiente varchar(255) NULL,
	nome varchar(255) NULL,
	numero varchar(255) NULL,
	perfil_acesso varchar(255) NULL,
	rg varchar(255) NULL,
	senha varchar(255) NULL,
	sexo varchar(255) NULL,
	sobre text NULL,
	telefone varchar(255) NULL,
	titulo varchar(255) NULL,
	uf varchar(255) NULL,
	url_imagem varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	valor_consulta float8 NULL,
	naturalidade varchar(255) NULL,
	escolaridade varchar(255) NULL,
	pai varchar(255) NULL,
	pai_idade varchar(255) NULL,
	mae varchar(255) NULL,
	mae_idade varchar(255) NULL,
	responsavel_financeiro varchar(255) NULL,
	responsavel_financeiro_cpf varchar(255) NULL,
	profissao varchar(255) NULL,
	religiao varchar(255) NULL,
	outros_contatos varchar(255) NULL,
	irmaos_tem bool NULL,
	irmaos_info varchar(255) NULL,
	filhos_tem bool NULL,
	filhos_info varchar(255) NULL,
	conjuge_nome varchar(255) NULL,
	conjuge_idade varchar(255) NULL,
	cnpj varchar(255) NULL,
	passaporte varchar NULL,
	descricao_nota varchar NULL,
	status_disabled bool NULL,
	razao_social varchar(255) NULL,
	nome_clinica varchar(255) NULL,
	contself_chave_pessoa varchar(255) NULL,
	queixa varchar(150) NULL,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id)
);


-- public.usuarios_conselhos definition

-- Drop table

-- DROP TABLE public.usuarios_conselhos;

CREATE TABLE public.usuarios_conselhos (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_conselho int4 NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	numero text NULL,
	uf_conselho varchar NULL,
	CONSTRAINT usuarios_conselhos_pkey PRIMARY KEY (id)
);


-- public.usuarios_convenios definition

-- Drop table

-- DROP TABLE public.usuarios_convenios;

CREATE TABLE public.usuarios_convenios (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_convenio int4 NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT usuarios_convenios_pkey PRIMARY KEY (id)
);


-- public.usuarios_especialidades definition

-- Drop table

-- DROP TABLE public.usuarios_especialidades;

CREATE TABLE public.usuarios_especialidades (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_especialidade int4 NULL,
	id_usuario int4 NULL,
	valor_consulta float8 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	duracao text NULL,
	duracao_limite varchar NULL,
	split_valor varchar NULL,
	CONSTRAINT usuarios_especialidades_pkey PRIMARY KEY (id)
);


-- public.usuarios_horarios definition

-- Drop table

-- DROP TABLE public.usuarios_horarios;

CREATE TABLE public.usuarios_horarios (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_usuario int4 NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	horario_final text NULL,
	horario_inicial text NULL,
	data_limite date NULL,
	dias_semana _int4 NULL,
	CONSTRAINT usuarios_horarios_pkey PRIMARY KEY (id)
);


-- public.usuarios_integracoes definition

-- Drop table

-- DROP TABLE public.usuarios_integracoes;

CREATE TABLE public.usuarios_integracoes (
	id serial4 NOT NULL,
	id_ambiente varchar(255) NULL,
	id_integracao int4 NULL,
	id_usuario int4 NULL,
	valor varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	external_id text NULL,
	CONSTRAINT usuarios_integracoes_pkey PRIMARY KEY (id)
);


-- public.usuarios_recuperacoes_senhas definition

-- Drop table

-- DROP TABLE public.usuarios_recuperacoes_senhas;

CREATE TABLE public.usuarios_recuperacoes_senhas (
	id serial4 NOT NULL,
	chave varchar(255) NULL,
	data_hora_expiracao timestamptz NULL,
	id_ambiente varchar(255) NULL,
	id_usuario int4 NULL,
	"token" varchar(255) NULL,
	valor varchar(255) NULL,
	data_hora_criacao timestamptz NOT NULL,
	data_hora_atualizacao timestamptz NOT NULL,
	CONSTRAINT usuarios_recuperacoes_senhas_pkey PRIMARY KEY (id)
);