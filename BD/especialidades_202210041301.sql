INSERT INTO public.especialidades (id_ambiente,nome,permite_convenio,permite_particular,permite_publico,data_hora_criacao,data_hora_atualizacao,descricao,url_imagem,valor_consulta,duracao_consulta,pre_definido) VALUES
	 ('virtumed','Clinico Geral',true,true,false,'2022-03-12 22:19:57.301-03','2022-03-12 22:19:57.301-03','<p>teste</p>',NULL,100.0,'30',false),
	 ('development','NEUROCIRURGIA',false,true,false,'2020-11-23 07:59:54.359-03','2020-11-23 07:59:54.359-03',NULL,NULL,NULL,NULL,NULL),
	 ('development','NEUROCIRURGIA',false,true,false,'2020-11-23 07:59:54.508-03','2020-11-23 07:59:54.508-03',NULL,NULL,NULL,NULL,NULL),
	 ('doctorgram','Homeopatia',true,true,true,'2021-01-05 20:59:09.492-03','2021-01-18 16:12:11.381-03','<p><span style="color: rgb(98, 98, 98);">Homeopatia é um termo que permeia a área da saúde há mais de 200 anos. O conceito é relacionado a uma diretriz terapêutica baseada em princípios diferentes dos tidos como “convencionais” para tratar doenças.</span></p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/25426a06-cb86-4d1e-b0f4-003c058bd55f.jpeg',700.0,'60',true),
	 ('smr','Psicologia',false,true,false,'2022-04-11 18:32:54.538-03','2022-04-11 18:32:54.538-03','<p>Psicologia</p>',NULL,200.0,'60',false),
	 ('smr','Psiquiatria',false,true,false,'2022-04-11 18:33:31.934-03','2022-04-11 18:33:31.934-03','<p>Psiquiatria</p>',NULL,200.0,'60',false),
	 ('doctorgram','Emergencia',true,true,true,'2021-01-18 16:37:59.887-03','2021-01-19 15:03:24.183-03','<p>ABC</p>',NULL,500.0,'90',NULL),
	 ('doctorgram','Clinico Geral',true,true,true,'2021-01-19 15:05:00.016-03','2021-01-19 15:05:00.016-03','<p>AAA</p>',NULL,350.0,'60',NULL),
	 ('doctorgram','NEUROCIRURGIÃO',true,true,true,'2020-10-29 10:21:39.606-03','2020-11-30 22:02:40.94-03',NULL,NULL,NULL,NULL,NULL),
	 ('doctorgram','OTORRINOLARINGOLOGISTA',true,true,true,'2020-11-10 15:02:10.489-03','2020-11-16 18:17:26.747-03',NULL,NULL,NULL,NULL,NULL);
INSERT INTO public.especialidades (id_ambiente,nome,permite_convenio,permite_particular,permite_publico,data_hora_criacao,data_hora_atualizacao,descricao,url_imagem,valor_consulta,duracao_consulta,pre_definido) VALUES
	 ('doctorgram','Epidemiologia',true,true,true,'2021-01-06 10:45:48.942-03','2021-01-06 10:45:48.942-03','<p><span style="color: rgb(32, 33, 36);">ramo da medicina que estuda os diferentes fatores que intervêm na difusão e propagação de doenças, sua frequência, seu modo de distribuição, sua evolução e a colocação dos meios necessários a sua prevenção.</span></p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/31e0a96c-05b0-4789-9e3d-58f60985b44a.jpeg',650.0,'50',true),
	 ('animare','Educação física',false,true,false,'2021-08-05 07:39:20.112-03','2021-08-05 07:39:20.112-03','<p>Aula de educação física.</p>',NULL,125.0,'60',false),
	 ('vaptmed','Pediatria',false,true,true,'2021-10-28 16:25:27.984-03','2021-10-28 16:25:27.984-03','<p>Melhor pediatra do mundo</p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/61b38469-db9a-41a3-a386-4fab20f40d9d.png',100.0,'10',true),
	 ('doctorgram','REUMATOLOGIA',true,true,true,'2020-11-10 15:17:02.307-03','2021-01-06 10:55:07.995-03',NULL,NULL,500.0,'60',true),
	 ('doctorgram','Cardiologia',false,true,true,'2020-11-18 13:54:38.722-03','2020-11-18 13:54:38.722-03',NULL,NULL,NULL,NULL,NULL),
	 ('animare','Enfermagem',false,true,false,'2022-02-03 14:07:42.817-03','2022-02-03 14:07:42.817-03','<p>Enfermagem</p>',NULL,200.0,'45',false),
	 ('doctorgram','Oftalmologista',true,false,false,'2020-11-18 13:49:45.503-03','2021-01-06 16:24:07.545-03','<p>Especialidade médica que se dedica ao estudo e tratamento das doenças e erros de refração apresentados pelo olho; oculística, oftalmiatria.</p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/c18281b9-5bc4-4c64-a635-bb74c83a6551.png',350.0,'60',NULL),
	 ('doctorgram','Atendimento Familiar Psiquiatria',false,true,false,'2020-12-26 21:21:57.536-03','2021-01-18 15:57:27.511-03','<p>Atendimento familiar teste</p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/6a11e3e1-125d-496b-9e46-0cee85b6c86d.png',150.0,'60',true),
	 ('doctorgram','ONCOLOGIA',true,false,true,'2020-10-29 10:31:31.931-03','2020-11-20 11:55:18.411-03',NULL,'https://images-telemedicina.s3.us-west-2.amazonaws.com/cc00dcff-59f2-4411-b6c4-7b088f57171f.jpeg',NULL,NULL,NULL),
	 ('homologacao','Cannabis',true,true,false,'2022-05-26 21:46:15.368-03','2022-05-26 21:46:15.368-03',NULL,NULL,100.0,'60',false);
INSERT INTO public.especialidades (id_ambiente,nome,permite_convenio,permite_particular,permite_publico,data_hora_criacao,data_hora_atualizacao,descricao,url_imagem,valor_consulta,duracao_consulta,pre_definido) VALUES
	 ('smr','Nutrição',true,true,true,'2022-04-12 09:47:49.109-03','2022-04-12 10:51:57.332-03','<p><br></p>',NULL,250.0,'20',false),
	 ('animare','Fisioterapia',false,true,false,'2022-04-22 10:34:56.562-03','2022-04-22 10:34:56.562-03','<p>Fisioterapia </p>',NULL,135.0,'60',false),
	 ('doctorgram','UROLOGIA',true,true,true,'2020-11-10 15:03:30.006-03','2020-12-02 22:34:53.109-03',NULL,NULL,329.0,'60',NULL),
	 ('doctorgram','PSIQUIATRA',false,false,true,'2020-10-29 10:58:42.991-03','2020-12-02 22:35:28.998-03',NULL,NULL,NULL,'120',NULL),
	 ('doctorgram','PNEUMOLOGISTA',false,true,false,'2020-10-28 14:12:52.786-03','2020-12-02 22:41:58.555-03',NULL,NULL,NULL,'-14',NULL),
	 ('bkp_cbd','Medicina integrativa / Cannabis Medicinal',true,true,true,'2022-02-07 19:13:49.19-03','2022-02-07 19:13:49.19-03','<p>Especialista em medicina integrativa e Cannabis Medicinal</p>','https://images-telemedicina.s3.us-west-2.amazonaws.com/388cff4c-f89d-43fc-bf49-9da81817b1b4.jpeg',450.0,'60',false),
	 ('bkp_cbd','Angiologia',false,true,false,'2022-02-19 18:10:50.52-03','2022-02-19 18:10:50.52-03','<p>Angiologia</p>',NULL,600.0,'60',false),
	 ('bkp_cbd','Cirurgia Vascular',false,true,false,'2022-02-19 18:10:22.473-03','2022-02-19 18:11:02.892-03','<p>Cirurgia Vascular</p>',NULL,600.0,'60',false),
	 ('bkp_cbd','Psiquiatria Geral',false,true,false,'2022-02-19 18:20:17.439-03','2022-02-19 18:20:17.439-03','<p>Psiquiatria Geral</p>',NULL,500.0,'60',false),
	 ('bkp_cbd','Psiquiatria Forense',false,true,false,'2022-02-19 18:20:39.337-03','2022-02-19 18:20:39.337-03','<p>Psiquiatria Forense</p>',NULL,500.0,'60',false);
INSERT INTO public.especialidades (id_ambiente,nome,permite_convenio,permite_particular,permite_publico,data_hora_criacao,data_hora_atualizacao,descricao,url_imagem,valor_consulta,duracao_consulta,pre_definido) VALUES
	 ('doctorgram','PEDIATRIA',false,true,true,'2020-11-05 17:55:43.338-03','2020-12-03 00:02:07.041-03',NULL,NULL,500.0,'60',NULL),
	 ('doctorgram','PEDIATRIA',true,true,true,'2020-11-05 17:55:45.054-03','2020-12-03 14:40:36.736-03',NULL,NULL,60.0,'60',NULL),
	 ('animare','Psiquiatria',false,true,false,'2020-11-09 16:08:40.469-03','2020-12-04 07:37:51.859-03',NULL,NULL,NULL,'60',NULL),
	 ('animare','Neurologia',false,true,false,'2020-11-10 19:06:19.248-03','2020-12-04 07:39:09.038-03',NULL,NULL,NULL,'60',NULL),
	 ('animare','Endocrinologia',false,true,false,'2020-11-10 19:06:33.908-03','2020-12-04 07:40:31.463-03',NULL,NULL,NULL,'60',NULL),
	 ('animare','Psicologia',false,true,false,'2020-11-10 19:05:34.838-03','2020-12-04 07:41:03.413-03',NULL,NULL,NULL,'60',NULL),
	 ('animare','Nutrição',false,true,false,'2020-11-10 19:05:12.889-03','2020-12-04 07:42:32.878-03',NULL,NULL,NULL,'60',NULL),
	 ('animare','Terapeuta Ocupacional',false,true,false,'2020-11-10 19:05:24.451-03','2020-12-04 07:42:50.42-03',NULL,NULL,NULL,'60',NULL),
	 ('bkp_cbd','Cardiologista',false,false,false,'2021-11-26 13:30:21.995-03','2022-02-25 15:01:32.064-03','<p>teste</p>',NULL,500.0,'60',false),
	 ('cbdoctors','Cannabis Medicinal',false,true,true,'2022-05-25 14:24:34.992-03','2022-05-26 16:39:23.23-03',NULL,NULL,450.0,'60',false);
INSERT INTO public.especialidades (id_ambiente,nome,permite_convenio,permite_particular,permite_publico,data_hora_criacao,data_hora_atualizacao,descricao,url_imagem,valor_consulta,duracao_consulta,pre_definido) VALUES
	 ('cbdoctors','Cannabis Medicinal - Acompanhamento',false,true,false,'2022-05-26 17:42:16.877-03','2022-05-31 11:43:32.903-03',NULL,NULL,450.0,'30',false),
	 ('cbdoctors','Orientação farmacêutica',false,true,false,'2022-06-02 14:29:42.378-03','2022-06-02 14:29:42.378-03',NULL,NULL,0.0,'15',false),
	 ('atendimento','Clínica Médica',false,true,false,'2022-09-13 17:45:42.131-03','2022-09-20 22:58:17.845-03','<p>Teste de uso da plataforma</p>',NULL,215.0,'30',false),
	 ('cbdoctors','1º Acompanhamento Farmacoterapêutico',false,true,false,'2022-06-29 15:51:01.594-03','2022-06-29 16:17:00.939-03',NULL,NULL,0.0,'50',false),
	 ('cbdoctors','Acompanhamento Farmacoterapêutico',false,true,false,'2022-06-29 15:51:19.823-03','2022-06-29 16:17:29.897-03',NULL,NULL,0.0,'20',false);
