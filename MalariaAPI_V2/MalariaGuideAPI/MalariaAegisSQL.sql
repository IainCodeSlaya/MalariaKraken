CREATE DATABASE Malaria
GO

USE Malaria
GO

CREATE TABLE [Health_Admin] (
  [Health_Admin_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Name] varchar(50),
  [Surname] varchar(50),
  [Contact_Number] varchar(32),
  [Health_Admin_Number] varchar(50),
  [Password] Varchar(50)
);

INSERT INTO [dbo].[Health_Admin] VALUES ('Nick','Rick','0124563256','16037192','admin')
INSERT INTO [dbo].[Health_Admin] VALUES ('Jack','NotSparrow','0124206395','36007192','admin')
INSERT INTO [dbo].[Health_Admin] VALUES ('Fred','Derf','0124205698','14007192','admin')
INSERT INTO [dbo].[Health_Admin] VALUES ('Layla','Skywalks','0856548921','16407192','admin')
INSERT INTO [dbo].[Health_Admin] VALUES ('Ash','Left','0742563216','16007192','admin')

CREATE TABLE [Malaria] (
  [Malaria_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Malaria_Background] varchar(500)
);

INSERT INTO [dbo].[Malaria] VALUES ('BG')

CREATE TABLE [Preventative_Measure] (
  [Preventative_Measure_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Measure_Description] varchar(250),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Preventative_Measure] VALUES ('Prevent mosquito bites. Wear long sleeve shirts and pants to cover your skin all the time',1)
INSERT INTO [dbo].[Preventative_Measure] VALUES ('Apply insect repellent to skin and clothing. Sprays containing DEET can be used on skin and sprays containing Permethrin are safe on clothing.',1)
INSERT INTO [dbo].[Preventative_Measure] VALUES ('Sleep under a net, particularly those treated with insecticide, help prevent mosquito bites while you are sleeping.',1)
INSERT INTO [dbo].[Preventative_Measure] VALUES ('Seek early treatment for any flu-like illness (fever, headache, vomiting)',1)
INSERT INTO [dbo].[Preventative_Measure] VALUES ('If you are going to be travelling to a location where malaria is common, you may want to take chemoprolaxis before entering the malaria area',1)

CREATE TABLE [Symptom] (
  [Symptom_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Symptom_Name] varchar(50),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Symptom] VALUES ('Headache',1)
INSERT INTO [dbo].[Symptom] VALUES ('Fever',1)
INSERT INTO [dbo].[Symptom] VALUES ('Fatigue',1)
INSERT INTO [dbo].[Symptom] VALUES ('Muscle Pain',1)
INSERT INTO [dbo].[Symptom] VALUES ('Back Pain',1)
INSERT INTO [dbo].[Symptom] VALUES ('Chills',1)
INSERT INTO [dbo].[Symptom] VALUES ('Sweating',1)
INSERT INTO [dbo].[Symptom] VALUES ('Dry Cough',1)
INSERT INTO [dbo].[Symptom] VALUES ('Stomach Enlargement',1)
INSERT INTO [dbo].[Symptom] VALUES ('Nausea',1)
INSERT INTO [dbo].[Symptom] VALUES ('Vomiting',1)

CREATE TABLE [Risk] (
  [Risk_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Risk] varchar(50)
);

INSERT INTO [dbo].[Risk] VALUES ('High')
INSERT INTO [dbo].[Risk] VALUES ('None')
INSERT INTO [dbo].[Risk] VALUES ('AltitudeException')
INSERT INTO [dbo].[Risk] VALUES ('RegionException')

CREATE TABLE [Country] (
  [Country_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Country_Name] varchar(50),
  [Risk_ID] int FOREIGN KEY REFERENCES [Risk]([Risk_ID]),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Country] VALUES ('Angola',1,1)
INSERT INTO [dbo].[Country] VALUES ('Benin',1,1)
INSERT INTO [dbo].[Country] VALUES ('Botswana',4,1)
INSERT INTO [dbo].[Country] VALUES ('Burkina Faso',1,1)
INSERT INTO [dbo].[Country] VALUES ('Burundi',1,1)
INSERT INTO [dbo].[Country] VALUES ('Cabo Verde',1,1)
INSERT INTO [dbo].[Country] VALUES ('Cameroon',1,1)
INSERT INTO [dbo].[Country] VALUES ('Central African Republic',1,1)
INSERT INTO [dbo].[Country] VALUES ('Chad',1,1)
INSERT INTO [dbo].[Country] VALUES ('Comoros ',1,1)
INSERT INTO [dbo].[Country] VALUES ('Democratic Republic of the Congo',1,1)
INSERT INTO [dbo].[Country] VALUES ('Republic of the Cote d Ivoire',1,1)
INSERT INTO [dbo].[Country] VALUES ('Djibouti',1,1)
INSERT INTO [dbo].[Country] VALUES ('Equatorial Guinea',1,1)
INSERT INTO [dbo].[Country] VALUES ('Eritrea',3,1)
INSERT INTO [dbo].[Country] VALUES ('Swaziland',4,1)
INSERT INTO [dbo].[Country] VALUES ('Ethiopia ',3,1)
INSERT INTO [dbo].[Country] VALUES ('Gabon',1,1)
INSERT INTO [dbo].[Country] VALUES ('Gambia',1,1)
INSERT INTO [dbo].[Country] VALUES ('Ghana',1,1)
INSERT INTO [dbo].[Country] VALUES ('Guinea',1,1)
INSERT INTO [dbo].[Country] VALUES ('Guinea-Bissau',1,1)
INSERT INTO [dbo].[Country] VALUES ('Kenya',3,1)
INSERT INTO [dbo].[Country] VALUES ('Lesotho',2,1)
INSERT INTO [dbo].[Country] VALUES ('Liberia',1,1)
INSERT INTO [dbo].[Country] VALUES ('Libya',2,1)
INSERT INTO [dbo].[Country] VALUES ('Madagascar',1,1)
INSERT INTO [dbo].[Country] VALUES ('Malawi',1,1)
INSERT INTO [dbo].[Country] VALUES ('Mali',1,1)
INSERT INTO [dbo].[Country] VALUES ('Mauritania',4,1)
INSERT INTO [dbo].[Country] VALUES ('Mauritius',2,1)
INSERT INTO [dbo].[Country] VALUES ('Morocco',2,1)
INSERT INTO [dbo].[Country] VALUES ('Mozambique',1,1)
INSERT INTO [dbo].[Country] VALUES ('Namibia',4,1)
INSERT INTO [dbo].[Country] VALUES ('Niger',1,1)
INSERT INTO [dbo].[Country] VALUES ('Nigeria',1,1)
INSERT INTO [dbo].[Country] VALUES ('Rwanda',1,1)
INSERT INTO [dbo].[Country] VALUES ('Sao Tome and Principe',1,1)
INSERT INTO [dbo].[Country] VALUES ('Senegal',1,1)
INSERT INTO [dbo].[Country] VALUES ('Seychelles',2,1)
INSERT INTO [dbo].[Country] VALUES ('Sierra Leone',1,1)
INSERT INTO [dbo].[Country] VALUES ('Somalia',1,1)
INSERT INTO [dbo].[Country] VALUES ('South Africa',4,1)
INSERT INTO [dbo].[Country] VALUES ('South Sudan',1,1)
INSERT INTO [dbo].[Country] VALUES ('Sudan',1,1)
INSERT INTO [dbo].[Country] VALUES ('Tanzania',3,1)
INSERT INTO [dbo].[Country] VALUES ('Togo',1,1)
INSERT INTO [dbo].[Country] VALUES ('Uganda',1,1)
INSERT INTO [dbo].[Country] VALUES ('Zambia',1,1)
INSERT INTO [dbo].[Country] VALUES ('Zimbabwe',1,1)

CREATE TABLE [Cause] (
  [Cause_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Cause_Name] varchar(50),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Cause] VALUES ('CCA',1)

CREATE TABLE [Malaria_Type] (
  [Malaria_Type_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Malaria_Type] varchar(32),
  [Malaria_Type_Description] varchar(250),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Malaria_Type] VALUES ('Plasmodium Falciparum','Mainly found in Africa, its the most common type of malaria parasite and is responsible for most malaria deaths worldwide.',1)
INSERT INTO [dbo].[Malaria_Type] VALUES ('Plasmodium Vivax','Mainly found in Asia and South America, this parasite causes milder symptoms than Plasmodium falciparum, but it can stay in the liver for up to 3 years, which can result in relapses.',1)
INSERT INTO [dbo].[Malaria_Type] VALUES ('Plasmodium Ovale','Fairly uncommon and usually found in West Africa, it can remain in your liver for several years without producing symptoms.',1)
INSERT INTO [dbo].[Malaria_Type] VALUES ('Plasmodium Malariae','This is quite rare and usually only found in Africa',1)
INSERT INTO [dbo].[Malaria_Type] VALUES ('Plasmodium Knowlesi','This is very rare and found in parts of southeast Asia',1)

CREATE TABLE [Vaccination] (
  [Vaccination_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Vaccination_Name] varchar(32),
  [Vaccination_Description] varchar(1000),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Vaccination] VALUES ('RTS','The World Health Organization Regional Office for Africa (WHO/AFRO) announced on April 24, 2017,
that Ghana, Kenya, and Malawi will partner with WHO in the Malaria Vaccine Implementation Programme (MVIP) that will make the RTS,S 
vaccine available in selected areas of the three countries. The country-led MVIP is being coordinated by WHO, in close collaboration 
with Ministries of Health in the participating countries and a range of in-country and international partners. Preparations for 
introduction of the vaccine in parts of Ghana, Kenya, and Malawi are already underway.',1)

CREATE TABLE [Infection_Cycle] (
  [Cycle_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Cycle_Head] varchar(32),
  [Cycle_Description] varchar(250),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Infection_Cycle] VALUES ('Mosquito','A mosquito becomes infected by feeding on a person who has malaria.',1)
INSERT INTO [dbo].[Infection_Cycle] VALUES ('Transmission','If this mosquito bites you in the future, it can transmit malaria parasites to you.',1)
INSERT INTO [dbo].[Infection_Cycle] VALUES ('Liver','Once the parasites enter your body, they travel to your liver — where some types can lie dormant for as long as a year.',1)
INSERT INTO [dbo].[Infection_Cycle] VALUES ('Bloodstream','When the parasites mature, they leave the liver and infect your red blood cells. This is when people typically develop malaria symptoms.',1)
INSERT INTO [dbo].[Infection_Cycle] VALUES ('Person','If an uninfected mosquito bites you at this point in the cycle, it will become infected with your malaria parasites and can spread them to the other people it bites.',1)

CREATE TABLE [Quick_Fact] (
  [Quick_Fact_ID] int IDENTITY(1,1) PRIMARY KEY,
  [Fact] varchar(250),
  [Malaria_ID] int FOREIGN KEY REFERENCES [Malaria]([Malaria_ID])
);

INSERT INTO [dbo].[Quick_Fact] VALUES ('Malaria is a preventable, treatable disease',1)
INSERT INTO [dbo].[Quick_Fact] VALUES ('Anopheles mosquitoes generally bite between dusk and dawn',1)
INSERT INTO [dbo].[Quick_Fact] VALUES ('Half of the world’s population is at risk of malaria',1)
INSERT INTO [dbo].[Quick_Fact] VALUES ('Non-immune travellers are at risk of severe malaria',1)
INSERT INTO [dbo].[Quick_Fact] VALUES ('Early diagnosis and prompt treatment reduces severe disease and death',1)




