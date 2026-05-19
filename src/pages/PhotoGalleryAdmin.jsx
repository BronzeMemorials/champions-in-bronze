import { useState, useMemo } from "react";
import { Download, Search, X, Edit2, Check, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";

// ─── MASTER PHOTO LIST — every unique image used across the entire site ────────
// Deduplicated by URL. Categories reflect the primary page/context.
const ALL_PHOTOS = [

  // ── AI-Generated / Conceptual (Hall of Fame, Donor, Portfolio) ──────────────
  { id: "gen-hof-main",    category: "Hall of Fame & Donor",   name: "Hall of Fame — Main Hero",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png" },
  { id: "gen-hof-ind",     category: "Hall of Fame & Donor",   name: "Hall of Fame — Individual Inductee",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png" },
  { id: "gen-hof-wall",    category: "Hall of Fame & Donor",   name: "Hall of Fame — Full Wall Installation",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png" },
  { id: "gen-donor",       category: "Hall of Fame & Donor",   name: "Donor Recognition Wall",                   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png" },
  { id: "gen-letters",     category: "Portfolio",               name: "Dimensional Bronze Letters",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png" },
  { id: "gen-foundry",     category: "Portfolio",               name: "Foundry Process",                          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png" },
  { id: "gen-paperweight", category: "Portfolio",               name: "Bronze Paperweight — Executive",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png" },
  { id: "gen-portfolio-1", category: "Portfolio",               name: "Portfolio Hero — QB Monument",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png" },
  { id: "gen-hof-2",       category: "Hall of Fame & Donor",   name: "Hall of Fame — Plaque Installation",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png" },

  // ── Core Product Photos (Plaques & Relief) ───────────────────────────────────
  { id: "plaque-1",        category: "Plaques & Relief",        name: "3D Relief Plaque — Main Hero",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png" },
  { id: "plaque-2",        category: "Plaques & Relief",        name: "Photo ImageCast Plaque — Hero",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png" },
  { id: "plaque-3",        category: "Plaques & Relief",        name: "3D Relief Plaque — View 3",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png" },
  { id: "plaque-4",        category: "Plaques & Relief",        name: "Bronze Bust / Relief — Dark Patina",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png" },
  { id: "plaque-5",        category: "Plaques & Relief",        name: "Bronze Bust — Side Profile",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f91a2af55_0BB7CEA4-F96D-4C51-BADB-946A7C8080BB.png" },
  { id: "plaque-6",        category: "Plaques & Relief",        name: "Bronze Plaque — Dedication Style",         url: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png" },
  { id: "plaque-7",        category: "Plaques & Relief",        name: "Donor / Capital Campaign Plaque",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png" },

  // ── Hall of Fame Plaques — Process: Schwarzkopf ──────────────────────────────
  { id: "rp-schw1",        category: "Process Photos — Plaques", name: "Gen. Schwarzkopf — Reference Photo",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0a4d2f8f0_SCHWARZKOPF-photo.jpg" },
  { id: "rp-schw2",        category: "Process Photos — Plaques", name: "Gen. Schwarzkopf — Clay Mold",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/108110e75_SCHWARZKOPF-clay-mold.jpg" },
  { id: "rp-schw3",        category: "Process Photos — Plaques", name: "Gen. Schwarzkopf — Finished Bronze",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/767475c4f_schwarzkopf-ph-plaque.jpg" },

  // ── Hall of Fame Plaques — Process: Hoffmann ─────────────────────────────────
  { id: "rp-mhoff1",       category: "Process Photos — Plaques", name: "Manfred Hoffmann — Reference Photo",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/dff654d8a_Manfred_HoffmannHighRes-colorphoto.jpg" },
  { id: "rp-mhoff2",       category: "Process Photos — Plaques", name: "Manfred Hoffmann — Clay Mold",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/125fa40c8_manfred-artis-clay-mold.jpg" },

  // ── Hall of Fame Plaques — Process: Reynolds ─────────────────────────────────
  { id: "rp-reynolds1",    category: "Process Photos — Plaques", name: "Reynolds — Reference Photo",              url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cf9e2126a_REYNOLDS-pic-ts.jpg" },
  { id: "rp-reynolds2",    category: "Process Photos — Plaques", name: "Reynolds — Clay Mold",                    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c5d05c31e_reynolds-clay-ts.jpg" },

  // ── Finished Plaques — Real Products ─────────────────────────────────────────
  { id: "rp-carol",        category: "Finished Plaques",         name: "Carol Hutchins — Michigan Softball HOF",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/dc6a79710_2026-CAROL-HUTCHINS-bas-relief.jpg" },
  { id: "rp-baseball",     category: "Finished Plaques",         name: "Baseball Player — Clay Mold in Progress", url: "https://media.base44.com/images/public/69e6638934292a547ec97753/03a853216_clay-baseball-man.jpg" },
  { id: "rp-andrews",      category: "Finished Plaques",         name: "Jessie Andrews Historical Marker",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9549ea0b4_2025-bas-relief-cast-bronze-plaque-Andrews.jpg" },
  { id: "rp-gaines",       category: "Finished Plaques",         name: "John Gaines Historical Marker",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/540027290_2025-bas-relief-cast-bronze-plaque-Gaines.jpg" },
  { id: "rp-tanig",        category: "Finished Plaques",         name: "Isamu Taniguchi Historical Marker",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d7e79f62a_2025-bas-relief-cast-bronze-plaque-taniguchi.jpg" },
  { id: "rp-drpepper",     category: "Finished Plaques",         name: "Dr Pepper Museum Co-Founders Plaque",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3e7b0f81_drpepper-440.jpg" },
  { id: "rp-vietnam",      category: "Finished Plaques",         name: "Vietnam Veterans Memorial Plaque",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b10d7478c_Vietnam-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-wwi",          category: "Finished Plaques",         name: "WWI Veterans Memorial Plaque",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c16278797_WWI-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-wwii",         category: "Finished Plaques",         name: "WWII Veterans Memorial Plaque",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fa624bcd9_WWII-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-fire-svc",     category: "Finished Plaques",         name: "Firefighter Service Relief Plaque",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d72ca993_firefighter-service-plaque.jpg" },
  { id: "rp-police",       category: "Finished Plaques",         name: "Police Service Relief Plaque",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/506d7cbcb_relief-police.jpg" },
  { id: "rp-hunter",       category: "Finished Plaques",         name: "Hunter Brooks Watson Memorial",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/1a0471236_hunter-brooks-2.jpg" },
  { id: "rp-birk",         category: "Finished Plaques",         name: "Berkshire Hills Bancorp Portrait Plaque", url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bb8ee0525_500-birk.jpg" },
  { id: "rp-plummer",      category: "Finished Plaques",         name: "Harold Plummer Recognition Plaque",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/3c32eaa2a_500-plummer.jpg" },

  // ── Bronze Busts ─────────────────────────────────────────────────────────────
  { id: "bust-1",          category: "Busts",                    name: "Hall of Fame Bust — Standard",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e7e3d4658_1E91D5BC-3065-45C0-97D6-B3B73A69B147.png" },
  { id: "bust-2",          category: "Busts",                    name: "Athlete Portrait Bust",                   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/44848d9d9_482FCAAE-ECB5-4353-8F76-83047C14293B.png" },
  { id: "bust-3",          category: "Busts",                    name: "Coach Portrait Bust",                     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/876a41f00_97391964-07D6-489A-9205-582199971031.png" },
  { id: "bust-4",          category: "Busts",                    name: "Championship Bust",                       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/39c3cd6df_7478CDCB-3379-4806-A3C1-5217AE403299.png" },
  { id: "bust-5",          category: "Busts",                    name: "Stadium Donor Bust",                      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3d24d314_AC0C6CDC-7A7A-4F16-9390-AD1C7E1A0EF3.png" },
  { id: "bust-6",          category: "Busts",                    name: "Historic Athlete Bust",                   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2066bf5b0_086E8FF7-8735-486A-8AD4-7F4FC37F21EE.png" },

  // ── Busts — Process Photos ───────────────────────────────────────────────────
  { id: "bs-carl1",        category: "Process Photos — Busts",   name: "Dr. Carl Everett — Reference Photo",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8f204e96a_Dr_Carl_Everett-pic.jpg" },
  { id: "bs-carl2",        category: "Process Photos — Busts",   name: "Dr. Carl Everett — Clay Mold",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cdaeeb4e4_Dr_Carl_Everett-clay-mold.jpg" },
  { id: "bs-meade1",       category: "Process Photos — Busts",   name: "Meade Woman — Clay Bust Mold",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e556bcdc6_meade-woman.jpg" },
  { id: "bs-meade2",       category: "Process Photos — Busts",   name: "Meade Clay Mold — In Studio",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c2734dc11_IMG_9572-meade-clay-mold.jpg" },
  { id: "bs-3dp",          category: "Process Photos — Busts",   name: "3D Printed Statue Model (Intermediate)",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f81a6917b_3d-print-statue-man.jpg" },

  // ── Athlete Statues — Football ───────────────────────────────────────────────
  { id: "stat-fb-qb",      category: "Statues — Football",       name: "Football Quarterback Statue",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/1d6975353_D2D956EF-C9FD-46EA-9075-C55DEEFA131F.png" },
  { id: "stat-fb-wr",      category: "Statues — Football",       name: "Football Wide Receiver Statue",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9b8441874_FCBF2923-CF61-4AE0-B720-2DF6F527DF5E.png" },
  { id: "stat-fb-ol",      category: "Statues — Football",       name: "Football Lineman Statue",                 url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9d6be36e2_E381DDD7-91BC-4FD3-A999-05CCFF675570.png" },
  { id: "stat-fb-rb",      category: "Statues — Football",       name: "Football Running Back Statue",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/1bff77f0c_650A3449-F5F7-4EC2-8D17-D57C866CB4B5.png" },

  // ── Athlete Statues — Basketball ─────────────────────────────────────────────
  { id: "stat-bk-guard",   category: "Statues — Basketball",     name: "Basketball Guard Statue",                 url: "https://media.base44.com/images/public/69e6638934292a547ec97753/61a13fc21_0D8CBDF0-E92C-4C8C-BB56-78829096663D.png" },
  { id: "stat-bk-fwd",     category: "Statues — Basketball",     name: "Basketball Forward Statue",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png" },
  { id: "stat-bk-dunk",    category: "Statues — Basketball",     name: "Basketball Center Dunk Pose Statue",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png" },

  // ── Athlete Statues — Baseball ───────────────────────────────────────────────
  { id: "stat-bb-pitch",   category: "Statues — Baseball",       name: "Baseball Pitcher Statue",                 url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b27459035_F3B8712D-DC41-4B43-8236-36BD93C004B6.png" },
  { id: "stat-bb-bat",     category: "Statues — Baseball",       name: "Baseball Batter Statue",                  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png" },
  { id: "stat-bb-catch",   category: "Statues — Baseball",       name: "Baseball Catcher Statue",                 url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png" },

  // ── Athlete Statues — Hockey ─────────────────────────────────────────────────
  { id: "stat-hk-goalie",  category: "Statues — Hockey",         name: "Hockey Goalie Statue",                    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png" },
  { id: "stat-hk-fwd",     category: "Statues — Hockey",         name: "Hockey Forward Statue",                   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png" },
  { id: "stat-hk-def",     category: "Statues — Hockey",         name: "Hockey Defenseman Statue",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png" },

  // ── Athlete Statues — Soccer ─────────────────────────────────────────────────
  { id: "stat-sc-kick",    category: "Statues — Soccer",         name: "Soccer Forward Kick Pose Statue",         url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f6b5763e1_0BB4AFDE-FA5D-4A01-8CB5-D9453AA9951F.png" },
  { id: "stat-sc-cel",     category: "Statues — Soccer",         name: "Soccer Goal Celebration Pose Statue",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/aceb82ef5_8C52F27A-8EA2-4D4F-AF16-D02E1C58BFD8.png" },

  // ── Firefighter Memorials ────────────────────────────────────────────────────
  { id: "ff-72",           category: "Memorial Statues",         name: "Firefighter 72-inch Kneeling w/ Axe",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8bf520da9_figherfighter-72-inches.png" },
  { id: "ff-life",         category: "Memorial Statues",         name: "Firefighter Life-size Kneeling",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ce2eda476_firefighter-72-inches.jpg" },
  { id: "ff-dark",         category: "Memorial Statues",         name: "Firefighter Tabletop — Dark Patina",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/a736e67f3_table-top-firefighter-dark.jpg" },
  { id: "ff-gold",         category: "Memorial Statues",         name: "Firefighter Tabletop — Gold Patina",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fee1a9240_table-top-firefighter-light-r.jpg" },
  { id: "ff-helm1",        category: "Memorial Statues",         name: "Firefighter Helmet Bronze Sculpture",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/7c64e41ff_firefighter-helmet.jpg" },
  { id: "ff-helm2",        category: "Memorial Statues",         name: "Firefighter Helmet — Close-up",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0bb44a23f_firefighter-helmet-cr.jpg" },
  { id: "ff-helm3",        category: "Memorial Statues",         name: "Firefighter Helmet — Angle 2",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/491e4c058_firefighter-helmet-cr-2.jpg" },
  { id: "ff-crp",          category: "Memorial Statues",         name: "Firefighter 72-inch — Cropped Hero",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5ac10b016_figherfighter-72-inch-cr.jpg" },
  { id: "ff-lg",           category: "Memorial Statues",         name: "Firefighter Large Statue",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c80c9698_figherfighter-large.jpg" },

  // ── Military Memorials ───────────────────────────────────────────────────────
  { id: "mil-m4",          category: "Memorial Statues",         name: "M4 Battle Cross Memorial",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ff47f84a6_m4-rifle-cr.jpg" },
  { id: "mil-m16",         category: "Memorial Statues",         name: "M16 Battle Cross Memorial",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3c35f781_m16-rifle-cr.jpg" },
  { id: "mil-kneel",       category: "Memorial Statues",         name: "Kneeling Soldier — Vietnam Era",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c0b8156f5_soldier-kneeling-800-crr.jpg" },
  { id: "mil-vietnam",     category: "Memorial Statues",         name: "Vietnam Soldier Statue",                  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bfca59864_vietnam-soldier.jpg" },
  { id: "mil-salute",      category: "Memorial Statues",         name: "Soldier Saluting — Front & Back",         url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f860ddcd4_bronze-front-back-statue.jpg" },
  { id: "mil-salcr",       category: "Memorial Statues",         name: "Soldier Saluting — Cropped Detail",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ec72f3757_bronze-front-back-statue-cr.jpg" },

  // ── Animal Sculptures ────────────────────────────────────────────────────────
  { id: "ani-dog1",        category: "Animal Sculptures",        name: "Service Dog Bronze Sculpture",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d6b4c5020_service-dog.jpg" },
  { id: "ani-dog2",        category: "Animal Sculptures",        name: "Service Dog — Angle 2",                   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5f116da28_service-dogs.jpg" },
  { id: "ani-eagle-fnd",   category: "Animal Sculptures",        name: "Bronze Eagle — In Foundry (Assembly)",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/57ec33cb4_IMG_34042.jpg" },
  { id: "ani-eagle-frnt",  category: "Animal Sculptures",        name: "Gorham Eagle — Finished, Front View",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9574a705a_Gorham-Eagle-Front-View.jpg" },
  { id: "ani-eagle-side",  category: "Animal Sculptures",        name: "Gorham Eagle — Finished, Side View",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/46c712195_Gorham-eagle-side-view.jpg" },
  { id: "ani-eagle-tab1",  category: "Animal Sculptures",        name: "American Eagle Tabletop — Angle 1",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/172481efe_AmericanEagle-cr.jpg" },
  { id: "ani-eagle-tab2",  category: "Animal Sculptures",        name: "American Eagle Tabletop — Angle 2",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/71c629ec8_AmericanEagle-cr-2.jpg" },

  // ── Brand / Site Assets ──────────────────────────────────────────────────────
  { id: "brand-ring",      category: "Brand Assets",             name: "Champions in Bronze Ring",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/07d72101a_ChatGPTImageMay14202609_54_24AM.png" },
];

const CATEGORIES = ["All", ...Array.from(new Set(ALL_PHOTOS.map((p) => p.category)))];

// ─── Download helper ───────────────────────────────────────────────────────────
async function downloadImage(url, filename) {
  const ext = url.split(".").pop().split("?")[0] || "jpg";
  const safeExt = ["jpg","jpeg","png","webp","gif"].includes(ext.toLowerCase()) ? ext : "jpg";
  const res = await fetch(url, { mode: "cors" });
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename.replace(/[^a-z0-9_\-. ]/gi, "_") + "." + safeExt;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ─── Photo Card ────────────────────────────────────────────────────────────────
function PhotoCard({ photo, names, onRename, selected, onToggleSelect, downloading }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const displayName = names[photo.id] ?? photo.name;

  const startEdit = () => { setDraft(displayName); setEditing(true); };
  const commitEdit = () => { if (draft.trim()) onRename(photo.id, draft.trim()); setEditing(false); };

  return (
    <div className={`group relative border-2 transition-all duration-150 bg-white flex flex-col ${selected ? "border-amber-500 shadow-md" : "border-gray-200 hover:border-gray-400"}`}>
      {/* Select checkbox */}
      <button
        onClick={() => onToggleSelect(photo.id)}
        className={`absolute top-2 left-2 z-10 w-5 h-5 border-2 flex items-center justify-center transition-colors ${selected ? "bg-amber-500 border-amber-500" : "bg-white border-gray-300 group-hover:border-amber-400"}`}
      >
        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-50 flex-shrink-0">
        <img
          src={photo.url}
          alt={displayName}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name + actions */}
      <div className="p-3 border-t border-gray-100 flex flex-col flex-1">
        {editing ? (
          <div className="flex items-center gap-1">
            <input
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") setEditing(false); }}
              className="flex-1 text-xs border border-amber-400 px-2 py-1 rounded outline-none font-sans"
            />
            <button onClick={commitEdit} className="text-green-600 hover:text-green-800 p-0.5"><Check className="w-4 h-4" /></button>
            <button onClick={() => setEditing(false)} className="text-gray-400 hover:text-gray-600 p-0.5"><X className="w-4 h-4" /></button>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs text-gray-800 font-sans leading-snug flex-1 break-words">{displayName}</span>
            <button onClick={startEdit} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-700 flex-shrink-0 mt-0.5">
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider truncate">{photo.category}</span>
          <button
            disabled={downloading}
            onClick={() => downloadImage(photo.url, displayName)}
            className="flex items-center gap-1 text-[10px] text-gray-500 hover:text-amber-700 font-sans uppercase tracking-wider transition-colors disabled:opacity-40 flex-shrink-0 ml-1"
          >
            <Download className="w-3 h-3" /> DL
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PhotoGalleryAdmin() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [names, setNames] = useState({});
  const [selected, setSelected] = useState(new Set());
  const [downloading, setDownloading] = useState(false);

  const filtered = useMemo(() => {
    const cat = category === "All" ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.category === category);
    if (!search.trim()) return cat;
    const q = search.toLowerCase();
    return cat.filter((p) => (names[p.id] ?? p.name).toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [category, search, names]);

  const handleRename = (id, newName) => setNames((prev) => ({ ...prev, [id]: newName }));

  const toggleSelect = (id) => setSelected((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const selectAll = () => setSelected(new Set(filtered.map((p) => p.id)));
  const clearSelection = () => setSelected(new Set());

  const downloadBatch = async (photos) => {
    setDownloading(true);
    for (const photo of photos) {
      await downloadImage(photo.url, names[photo.id] ?? photo.name);
      await new Promise((r) => setTimeout(r, 350));
    }
    setDownloading(false);
  };

  const selectedCount = selected.size;
  const selectedPhotos = filtered.filter((p) => selected.has(p.id));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3 flex-1">
              <Image className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <div>
                <h1 className="font-serif text-xl text-gray-900 leading-tight">Photo Gallery Admin</h1>
                <p className="text-xs text-gray-500 font-sans">{ALL_PHOTOS.length} photos · {CATEGORIES.length - 1} categories</p>
              </div>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search photos…"
                className="pl-9 text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mt-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); clearSelection(); }}
                className={`text-xs font-sans px-3 py-1.5 border transition-colors whitespace-nowrap ${category === cat ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}
              >
                {cat}{cat !== "All" ? ` (${ALL_PHOTOS.filter((p) => p.category === cat).length})` : ` (${ALL_PHOTOS.length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-500 font-sans">{filtered.length} photos shown</span>
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          {selectedCount > 0 ? (
            <>
              <span className="text-sm font-sans text-amber-700 font-semibold">{selectedCount} selected</span>
              <Button variant="outline" size="sm" onClick={clearSelection} className="text-xs">Clear</Button>
              <Button
                size="sm"
                disabled={downloading}
                onClick={() => downloadBatch(selectedPhotos)}
                className="text-xs gap-1.5 bg-amber-600 hover:bg-amber-700 text-white border-0"
              >
                <Download className="w-3.5 h-3.5" />
                {downloading ? "Downloading…" : `Download ${selectedCount}`}
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" onClick={selectAll} className="text-xs">Select All</Button>
          )}
          <Button
            variant="outline"
            size="sm"
            disabled={downloading}
            onClick={() => downloadBatch(filtered)}
            className="text-xs gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            {downloading ? "Downloading…" : `Download All (${filtered.length})`}
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 font-sans">No photos match your search.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((photo) => (
              <FadeIn key={photo.id}>
                <PhotoCard
                  photo={photo}
                  names={names}
                  onRename={handleRename}
                  selected={selected.has(photo.id)}
                  onToggleSelect={toggleSelect}
                  downloading={downloading}
                />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}