import Iqi from "../assets/image/iqi.png";
import Duleh from "../assets/image/dulleh.png";
import Samson from "../assets/image/samson.png";
import Cipa from "../assets/image/cipa.png";
import Nadiras from "../assets/image/nadira.png";
import Dinda from "../assets/image/dinda.png";
import Daffa from "../assets/image/dappa.png";
import Kenny from "../assets/image/kenny.png";
import Kibil from "../assets/image/kibil.png";
import Opal from "../assets/image/opal.png";
import Valez from "../assets/image/valez.png";
import Daffiz from "../assets/image/david.png";
import Fawwaz from "../assets/image/fawwaz.png";

import { Button, Carousel, Modal } from "antd";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Character = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        pin: true,
        scrub: true,
      },
    });
  });

  const [characterOne, setCharacterOne] = useState(false);
  const [characterTwo, setCharacterTwo] = useState(false);
  const [characterThree, setCharacterThree] = useState(false);
  const [characterFor, setCharacterFor] = useState(false);
  const [characterFive, setCharacterFive] = useState(false);
  const [characterSix, setCharacterSix] = useState(false);
  const [characterSeven, setCharacterSeven] = useState(false);
  const [characterEight, setCharacterEight] = useState(false);
  const [characterNine, setCharacterNine] = useState(false);
  const [characterTen, setCharacterTen] = useState(false);
  const [character11, setCharacter11] = useState(false);
  const [character12, setCharacter12] = useState(false);
  const [character13, setCharacter13] = useState(false);

  return (
    <>
      <h1 className="text-center  whitespace-nowrap my-10 lg:mt-32  font-bold text-xl">
        CHOOSE YOUR CHARACTER
      </h1>
      <div className="hidden md:grid md:grid-cols-3 lg:grid lg:grid-cols-3">
        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto   object-cover aspect-square  shadow-sm shadow-slate-600"
            src={Iqi}
            alt={Iqi}
          />
          <div className="absolute grid top-0 bottom-0 left-0 right-0 place-content-center bg-black/40">
            <h1 className="font-bold text-white">Muhammad Rifqi Zafran</h1>
            <p className="text-xs text-center text-white">
              Intern Grapich Design
            </p>
            <Button
              onClick={() => setCharacterOne(!characterOne)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterOne}
              onCancel={() => setCharacterOne(false)}
              onOk={() => setCharacterOne(!characterOne)}
            >
              <p className="font-bold">Muhammad Rifqi Zafran</p>
              <p className="text-xs my-3">
                Magang di Cretivox itu menurut gue kayak balik lagi ke zaman
                sekolah. Disini gue bukan cuma kerja, tapi dengan lingkungannya
                dan kegiatan-kegiatannya, gue merasa kayak balik sekolah lagi.
                Mulai dari punya temen seangkatan (batch SE), ada user gue yang
                selalu ngebantu dan ngesupport gue, dan juga orang-orang yang
                ngajarin gue tentang apapun itu. Mulai dari kerjaan, disini gue
                sebagai intern graphic designer, selain disini skill design dan
                tools gue bener-bener di asah, gue juga belajar hal baru, mulai
                dari ideation design konten yang biasanya gue pelajarin saat
                bikin konten baru, ngebuat ide sebuah product, mulai dari konsep
                sampai final design, belajar juga photoshoot sebuah product,
                bahkan sampe gimana cara untuk membuat ide campaign/community
                baru untuk sebuah brand. Semua itu bener-bener diluar ekspektasi
                gue sebagai anak intern, gue belajar banyak banget, yang bahkan
                gaada hubungannya juga sama role gue. Selain kerjaan juga disini
                banyak banget kegiatan yang mungkin gaada di tempat intern lain,
                mulai dari camping, photoshoot, shooting-shooting anak batch,
                bahkan sampe ada kelas setiap minggunya, dan semua dikasih
                kesempatan untuk ngasih kelas tentang apapun itu. Dari setiap
                kegiatan itu gue belajar banyak banget tentang kehidupan dan
                tentang gue menjadi pribadi yang lebih baik. Cretivox emang ‘The
                University of Life’.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Duleh}
            alt={Duleh}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white ">Nurul Fadilah</h1>
            <p className="text-xs text-center text-white">
              Intern Video Production
            </p>
            <Button
              onClick={() => setCharacterTwo(!characterTwo)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterTwo}
              onCancel={() => setCharacterTwo(false)}
              onOk={() => setCharacterTwo(!characterTwo)}
            >
              <p className="font-bold">Nurul Fadilah</p>
              <p className="text-xs my-3">
                Semenjak gue masuk Cretivox, dunia gue berubah 180 derajat, gue
                yang dulunya cuek dan males join tiap ada acara kampus,
                keluarga, kantor, tapi disini buat gue sadar bahwa hal - hal
                kecil kayak ngumpul bareng tuh penting, karena kita gabakal tau
                kapan ada waktu buat bisa bareng - bareng lagi. Gue yang tadinya
                masih buta dalam hal teknisi apa itu industri media, sekarang
                mata gw bener - bener terbuka akan hal pekerjaan di media
                industridan jadi belajar banyak hal disini. Terimakasih buat
                Bang Ben yang udah percaya sama gue untuk coba experience di
                Cretivox, dan makasih banyak buat user dan tim produksi yang
                udah sabar ajarin gw pelan - pelan dan gak pernah marah, selalu
                kompak udah kayak keluarga gue sendiri loveee banyakkk,
                terimakasih banyak buat temen - temen juga udah selalu support
                dan semangat menjalani lika - liku pengalaman disini, semangat
                yaaa all jangan lupain gueee, kalian udah kayak rumah gue buat
                cerita segala hal love uuuu :””””””
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            src={Samson}
            alt={Samson}
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Arrizky Putra Ramadhan
            </h1>
            <p className="text-xs text-center text-white">Intern CopyWriter</p>
            <Button
              onClick={() => setCharacterThree(!characterThree)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterThree}
              onCancel={() => setCharacterThree(false)}
              onOk={() => setCharacterThree(!characterThree)}
            >
              <p className="font-bold">Arrizky Putra Ramadhan</p>
              <p className="text-xs my-3">
                Kalo ditanya kerjaan disini tuh sistemnya kaya gimana dan
                ngapain aja, sebagai Intern Copywriter disini, waktu pertama
                kali keterima jujur gue gak tau banyak soal Copywriting itu
                sendiri, tapi seiring berjalannya waktu, dan adaptasi dengan
                flow kerjaan yang sangat cepat, akhirnya gue bisa dan gue jadi
                tau banyak soal Copywriting itu sendiri. Cuma menjadi bisa, itu
                biasa, karena lo disini dituntut untuk menjadi luar biasa.
                Akhirnya dengan pressure dan plot kerja yang lumayan, at the end
                gue akhirnya bisa nyelesain sesuatu yang heavy, dan pemikiran
                gue juga semakin terbuka. Bahkan hal yang terlihat berat menurut
                orang lain, menurut gue itu jadi gampang, bener-bener waw, gue
                sendiri gak nyangka gue bakal se growth dan seberkembang itu di
                Cretivox, ni kantor bener-bener punya magis sendirinya bro, gak
                percaya? Cobain aja sendiri.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Cipa}
            alt={Cipa}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Aurelia Syifa Indrayana
            </h1>
            <div></div>
            <p className="text-xs text-white text-center">
              Intern Content Creator
            </p>
            <Button
              onClick={() => setCharacterFor(!characterFor)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterFor}
              onCancel={() => setCharacterFor(false)}
              onOk={() => setCharacterFor(!characterFor)}
            >
              <p className="font-bold my-3">Aurelia Syifa Indrayana</p>
              <p className="text-[10px]">
                Halo, cipa disini!! Kalo menurut gue ya kerja di Cretivox tuh
                kaya lagunya Hindia “Kapan terakhir kalo kamu dapat tertidur
                tenang?”. Eitsss… bukan karena kerja mulu kok, tapi emang otak
                gue aja yang selalu mikirin konten mulu WKWKWK. Kerja di
                Cretivox bikin otak kreatif gue jalan terus, bagi gue Cretivox
                adalah tempat buat menuangkan ide-ide kreatif gue. Selain jadi
                content creator gue juga bisa jadi content writer, dari yang
                awalnya buta soal per zodiak-an dan MBTI sampe akhirnya udah
                jago (dikit). Walaupun awalnya gue struggle magang di Cretivox,
                tapi selama 5 bulan ini gue bisa mendapatkan banyak ilmu yang
                gak gue dapetin pas gue kuliah. 5 bulan ini merubah gue jadi
                orang yang lebih sat set pas kerja, lebih bisa ngembangin ide,
                dan banyak lagi deh. Momen paling gue bangga pas magang disini
                adalah, ketika abis ngonten terus itu konten di post gue selalu
                liatin tuh konten sambil gue pantau views, likes dan comment
                orang-orang yang suka sama konten yang gue buat itu beneran jadi
                kebahagian buat gue sendiri sihhh. Kerja disini bener-bener work
                life balance deh! Lo kerja sambil seru-seruan, mulai dari Batch
                gue sendiri yang kepribadiannya beda-beda tapi bisa jadi
                keluarga dan hampir tiap weekend pergi mulu sampe fulltime yang
                selalu baik dan ngajarin pelan-pelan anak-anak internnya. Gue
                sayang banget sama semua, mulai dari warga awan, keluarga palsu
                digital, Batch S.E, dan seluruh orang yang ada di kantor ini.
                Thank you soooo muchh, Cretivox. I’m so lucky to be here!
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Nadiras}
            alt={Nadiras}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">Nadira Refiana</h1>
            <p className="text-xs text-white text-center">
              Intern Content Creator
            </p>
            <Button
              onClick={() => setCharacterFive(!characterFive)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterFive}
              onCancel={() => setCharacterFive(false)}
              onOk={() => setCharacterFive(!characterFive)}
            >
              <p className="font-bold">Nadira Refiana</p>
              <p className="text-xs my-3">
                “I cry a lot, but I am so productive.” Lirik singkat yang bisa
                gambarin hidup gue selama 5 bulan terakhir ini. Nangis? Iya.
                Produktif? Banget. It’s as simple as that, emang magang jadi
                content creator di Cretivox itu gak gampang, tapi pengalaman
                yang gue dapet, itu banyak banget. Di Cretivox, gue dikasih
                tempat buat nuangin semua ide kreatif yang gue punya. Gue yakin,
                kesempatan kayak gini gak akan bisa gue dapetin di tempat lain,
                terutama sebagai content creator. Bagi gue, ada kepuasan
                tersendiri saat konten gue laku dan disukai orang-orang. Bahkan,
                mantau likes dan comments udah jadi suatu kebiasaan sehari-hari,
                rasanya tuh bangga aja kalo gue dapet positive feedback. Selain
                kesempatan yang gak terbatas, gue juga bersyukur banget bisa
                ketemu user gue dan anak S.E. lainnya. Might sound like a lie,
                but this is the first time I feel accepted and included, it was
                truly an experience.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Dinda}
            alt={Dinda}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-white text-center">Dinda Saddono</h1>
            <p className="text-xs text-center text-white">Intern CopyWritter</p>
            <Button
              onClick={() => setCharacterSix(!characterSix)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterSix}
              onCancel={() => setCharacterSix(false)}
              onOk={() => setCharacterSix(!characterSix)}
            >
              <p className="font-bold">Dinda Saddono</p>
              <p className="text-xs my-3">
                Not everything is all rainbows and butterflies! Gue yang punya
                prinsip hidup slow living ini harus terbiasa sama deadline yang
                jedar jeder sama fast paced, dan karena gue disini dealing with
                brands, jadinya gue harus nrimo kalo misalnya gue menginisiasi
                sebuah ide, ide tersebut akan ditolak dan perlu di revisi.
                Disini bener-bener mental lo dibikin sekuat baja, dan ini yang
                bikin gue jadi man of steel. Terutama gue juga diamanahi jadi
                Social Media Handling buat Ajinomoto Professional, selain nulis
                konten buat brand dan artikel yang aka dimuat di Ajinomoto
                Professional, gue juga bertugas buat upload seluruh SOW di
                Ajinomoto Professional. Nangis karena banyak banget kerjaan?
                Tentu saja ada. Tapi gue punya prinsip This Too Shall Pass,
                kerjain dan lewatin aja semuanya dulu, dan gue juga mikir, buat
                kedepannya ini semua sangat worth it. Buktinya, sekarang
                portofolio gue rame banget dan It’s all because of Cretivox!
                Makasih banget Cretivox for the opportunity. Gue juga ngelaluin
                ini semua gak sendiri, tapi bersama 13 teman gue yang lain.
                Walaupun bercucuran air mata, gas aja terus borrrr! Lagian
                pulangnya bisa nongkrong sama temen gue juga lagian.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Daffa}
            alt={Daffa}
          />
          <div className="absolute  top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Muhammad Daffa Syabana Tiandi
            </h1>
            <p className="text-center text-xs text-white">
              Intern KOL Specialis
            </p>
            <Button
              onClick={() => setCharacterSeven(!characterSeven)}
              className="bg-black text-white mt-11 text-center w-[200px] m-auto"
            >
              Select Character
            </Button>
            <Modal
              open={characterSeven}
              onCancel={() => setCharacterSeven(false)}
              onOk={() => setCharacterSeven(!characterSeven)}
            >
              <p className="font-bold">Muhammad Daffa Syabana Tiandi</p>
              <p className="text-xs my-3">
                Magang disini tuh bener kaya rollercoaster. Tanggung jawab dari
                pekerjaan yang di berikan ke anak magang itu bisa dibilang
                hampir sama dengan fulltime, yang dimana kita harus “Gesit” biar
                bisa survive di dunia agency yang fast phase disini.Tapi
                untungnya disini lingkungan dan fulltimenya helpful banget, kita
                dibimbing dari yang awalnya gabisa apa-apa sampe bisa dibilang
                meningkat mulai dari segi soft skills dan hard skills. Dan 5
                bulan itu jujur kerasa cepet banget buat gue karena hari-hari
                gue diisi sama banyak aktifitas seru selama magang. Love you
                Cretivox!
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
            src={Kenny}
            alt={Kenny}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Kenny Bianco Kotambunan
            </h1>
            <p className="text-center text-xs text-white">
              Intern KOL Specialis
            </p>
            <Button
              onClick={() => setCharacterEight(!characterEight)}
              className="bg-black text-white mt-11 w-[200px] m-auto"
            >
              Select Character
            </Button>
            <Modal
              open={characterEight}
              onCancel={() => setCharacterEight(false)}
              onOk={() => setCharacterEight(!characterEight)}
            >
              <p className="font-bold">Kenny Bianco Kotambunan</p>
              <p className="text-xs my-3">
                Sebagai intern KOL Specialist di Cretivox, banyak hal yang gue
                dapetin. Mulai dari pengalaman yang seru2, pengalaman untuk
                mengasah soft dan hard skills, dan beberapa field experiences
                yang bikin gue makin ngerasa betah kerja disini. Disini pressure
                nya gede, tapi justru itu yang bikin gue makin tumbuh dan makin
                banyak belajar. Apalagi banyak keseruannya disini jadi dibawa
                asik aja bro. Buat gue, magang disini itu adalah turning point
                yang sangat berharga di hidup gue. Pertama kali terjun ke dunia
                kerja dan buat gue Cretivox itu tempat yang sangat cocok buat
                gue untuk nentuin apa yang gue mau kedepannya. Gue rasa 5 bulan
                ini adalah waktu yang sangat singkat untuk gue karena gue tau
                masih banyak hal yang belom gue gali disini. But anyways, it was
                good while it lasted. Thank you Cretivox!
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Kibil}
            alt={Kibil}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Nabila Nada Azizah
            </h1>
            <p className="text-xs text-white text-center">
              Intern Graphic Design
            </p>
            <Button
              onClick={() => setCharacterNine(!characterNine)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={characterNine}
              onCancel={() => setCharacterNine(false)}
              onOk={() => setCharacterNine(!characterNine)}
            >
              <p className="font-bold">Nabila Nada Azizah</p>
              <p className="my-3 text-xs">
                “Seru bangett magang di cretivox, pengen juga deh” kata
                temen-temen yang ngeliat story gue dan juga komen-komen netizen
                disetiap konten cretivox. Salah satu hal baik dari kebiasaan gua
                yang ga taro ekspektasi diawal daftar magang disini adalah gue
                malah dikasi kebahagiaan dan keberuntungan diluar dari apa yang
                pernah gue bayangin sebelumnya, yaitu dipertemukan sama
                orang-orang baik, skill design yang bertambah banyak, dan dapet
                kelas-kelas diluar kerjaan dari bang ben. Jangan lupa disini gue
                kerja ya, tentunya keseruannya balance sama beratnya kerjaan
                yang ada. Magang ini merupakan pengalaman pertama gue magang.
                Bukan pengalaman magang yang gue rasain, lebih ke “oh ternyata
                kerja susah ya, beda banget sama kuliah”. Disini gue bener-bener
                dikasi liat dan diajarin buat berada di dunia kerja yang
                sebenarnya tu gimana. Pasti tantangan dan tekanan magang disini
                berat ya, jujur gue kaget banget flow kerjanya cepat, tapi balik
                lagi gue disini buat belajar.Setelah ngejalani 5 bulan disini,
                skill gue pastinya bertambah lebih banyak dari sebelumnya. Gue
                ngerasain sendiri drastisnya perubahan skill design dan
                penilaian gue setiap ngeliat design dari HIMA kampus, even kalau
                gue liat design banner/baliho dipinggir jalan juga kadang suka
                gemes aja kalau ada yang minor dikit-dikit. Nangis? pasti. Gue
                nangis tapi tetep ngerjain kerjaan yang dikasi. Pernah kepikiran
                buat nyerah gasih? Pernah. Bulan ke-2 gue magang, gue beneran
                hampir nelfon papa dan mau nyerah. Tapi gue inget perjuangan dan
                biaya yang udah banyak keluar dari awal gua milih untuk
                ngejalanin ini semua. Gue hadapin semuanya sambil nangis ke papa
                tiap malem, berjuang tiap malem ngerjain tugas-tugas yang
                dikasih, sampai drop sakit hampir sebulan dan disamperin papa
                dari Pekanbaru ke Jakarta. Turns out semua perjuangan gue setiap
                malem itu jadi pelajaran berharga banget buat gue. “Kita bisa
                ngelakuin apapun itu, asal ada kemauan dari diri sendiri”.
                Dengan tekad gue dari awal datang kesini untuk belajar, gue
                selalu nerima setiap tugas dan kerjaan yang diberikan. Disini
                gue belajar banyak hal dan diajari langsung oleh user-user gue.
                Disini gue banyak dapet appreciate, dan perhatian yang menjadi
                salah satu alasan gue bisa bertahan sampai hari ini. Setiap lagu
                “Bayangkan jika kita tak menyerah” diputar, gue selalu
                ngebayangin saat dimana gue pernah kepikiran buat nyerah, tapi
                gue bisa bertahan sampe hari ini juga karna dipertemukan dengan
                temen-temen S.E yang baikk banget dan juga di supervised
                langsung dari user dan anak full time dikantor. Gue bangga sama
                diri gue bisa bertahan sampai hari dimana gue bisa nyeritaiin
                ini semua disini
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
            src={Opal}
            alt={Opal}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white">
              Mochamad Naufal Aufa Rifqi
            </h1>
            <p className="text-xs text-center text-white">
              Intern Front End Developer
            </p>
            <Button
              onClick={() => setCharacterTen(!characterTen)}
              className="bg-black text-white mt-11 w-[200px] m-auto"
            >
              Select Character
            </Button>
            <Modal
              open={characterTen}
              onCancel={() => setCharacterTen(false)}
              onOk={() => setCharacterTen(!characterTen)}
            >
              <p className="font-bold">Mochamad Naufal Aufa Rifqi</p>
              <p className="text-xs my-3">
                Magang di cretivox membuat gue jauh lebih better dari sebelumnya
                buat ngebentuk good habbits , disini juga lo bakal dibimbing dan
                dirangkul baik sama full-time”nya , disini tuh tempatnya belajar
                , tempat lo explore , bakal banyak banget yang bisa lo dapet
                disini , Best Quotes , Terbentur , Terbentur , Terbentuk , 5
                bulan yang mixing banget , kadang ada sedih dan senang , Thank
                you buat 5 bulannya CBN udah dikasih kesempatan buat magang
                disini , Thank You buat Bang Ben buat semuanya , dan terakhir ,
                thanks CRETIVOX dan juga BATCHSE!
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Valez}
            alt={Valez}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-center text-white ">
              Valezka Eugenie
            </h1>
            <p className="text-xs text-white text-center">
              Intern Content Creator
            </p>
            <Button
              onClick={() => setCharacter11(!character11)}
              className="bg-black text-white mt-11 w-[200px]"
            >
              Select Character
            </Button>
            <Modal
              open={character11}
              onCancel={() => setCharacter11(false)}
              onOk={() => setCharacter11(!character11)}
            >
              <p className="font-bold">Valezka Eugenie</p>
              <p className="text-xs my-3">
                Magang disini tuh jangan berharap cuman main-main doang terus
                pulang. Disini lo bener bener diajarin dan dibawa langsung
                kedalam dunia kerja. Lo bakal dilibatin dibanyak projek dan
                semua itu harus selesai. Berat? Iya bera sering nangis apalagi,
                tapi kalo lo bisa lewatin hal yang berat berarti lo udah keren,
                lo udah bisa jadi sosok yang lebih baik dari sebelumnya. Gue
                orangnya overthingkingan dan itu nyiksa gue banget tapi magang
                disini juga ngajarin gue gimana caranya fokus ke hal yang bisa
                lo kendaliin aja, urusan pikiran orang gimana terhadap lo itu
                udah diluar kendali. Jadi fokus ke hal yang bisa lo kendali.
                Terimakasih banyak buat CBN yang udah percaya dan ngasih
                kesempatan buat gue belajar disini. Gue pengen banget punya
                media digital sendiri dan gue yakin lulus dari sini hal yang gue
                inginkan pasti bakal terwujud kalo udah waktunya.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Daffiz}
            alt={Daffiz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
            <h1 className="font-bold text-white text-center">
              Muhammad Naufal Hadafiz
            </h1>
            <p className="text-xs text-center text-white">
              Intern Video Production
            </p>
            <Button
              onClick={() => setCharacter12(!character12)}
              className="bg-black text-white mt-11 w-[200px] m-auto"
            >
              Select Character
            </Button>
            <Modal
              open={character12}
              onCancel={() => setCharacter12(false)}
              onOk={() => setCharacter12(!character12)}
            >
              <p className="font-bold">Muhammad Naufal Hadafiz</p>
              <p className="text-xs my-3">
                Sebagai anak magang produksi yang kuliahnya di jurusan hubungan
                internasioal, gue merasa minder awalnya karena jurusan gue yang
                ga nyambung sama sekali dengan posisi ini. Tapi dengan bantuan
                dari user-user yang sangat helpfull guw bisa ngejalaninnya
                dengan baik dan bisa diberi kepercayaan untuk nge gaffer buat
                syuting brand. Disitu gue sedikit takut awalnya tapi terus
                selalu diyakinin sama fulltime-fulltime buat lebih percaya diri
                dengan apa yang udah gue pelajari. Selama disini juga gue
                dapetin banyak temen-temen yang supportif. Anak batch se yang
                saling mengingatkan yang saling nyemangatin kalo ada yang lagi
                burn out. Keren-keren banget deh orang-orang disini. Heboh dan
                berisik banget. Tapi semua itu fun dan bisa nge boost semangat
                kerja lo biar tetep on fire (emot api). Terima kasih Cretivox
                udah mau nerima gue yang banyak kekurangan ini. Gue sangat
                berkembang disini. Banyak hal berubah tentunya ke arah yang
                lebih baik. Banyak hal juga yang bertambah. Dan banyak kenangan
                yang terbentuk. Semoga kami semua (batch se) akanjadi sekelompok
                orang yang jadi “orang”.
              </p>
            </Modal>
          </div>
        </div>

        <div className="relative">
          <img
            className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            src={Fawwaz}
            alt={Fawwaz}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/40">
            <h1 className="font-bold text-white">Muhammad Fawwaz Wijaya</h1>
            <p className="text-xs text-center text-white">
              Intern Video Editor
            </p>
            <Button
              onClick={() => setCharacter13(!character13)}
              className="bg-black text-white mt-11 w-[200px] m-auto"
            >
              Select Character
            </Button>
            <Modal
              open={character13}
              onCancel={() => setCharacter13(false)}
              onOk={() => setCharacter13(!character13)}
            >
              <p className="font-bold">Muhammad Fawwaz Wijaya</p>
              <p className="text-xs my-3">
                Di Cretivox gue diberi kesempatan buat tuangin semua keahlian
                gue dalam editing video terus juga dikasih kesempatan buat
                explore lebih jauh lagi tentang Cretivox, content pillar, dan
                guide video editing di Cretivox. Dibilang kerja cape..ya cape
                lah gak ada kerja yang gak cape, tapi semua itu membuahkan hasil
                yang sangat sepadan apa yang udah gue lakuin dan gue gak nyesel
                sama sekali apa yang udah gue jalanin. Gak pernah sama sekali
                gue nyesel jadi bagian di Cretivox, mereka yang memberi gue hal
                baru. Thank you CBN udah kasih kepercayaan ke gue soal editing
                video, thank you juga atas ilmunya. Thanks for everything!!!
              </p>
            </Modal>
          </div>
        </div>
      </div>
      <div className="w-screen m-auto grid sm:hidden md:hidden lg:hidden ">
        <Carousel
          className="w-screen m-auto grid sm:hidden md:hidden lg:hidden "
          autoplay
          autoplaySpeed={900}
          infinite={true}
        >
          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto   object-cover aspect-square  shadow-sm shadow-slate-600"
              src={Iqi}
              alt={Iqi}
            />
            <div className="absolute grid top-0 bottom-0 left-0 right-0 place-content-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Rifqi Zafran</h1>
              <p className="text-xs text-center text-white">
                Intern Grapich Design
              </p>
              <Button
                onClick={() => setCharacterOne(!characterOne)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Duleh}
              alt={Iqi}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Nurul Fadilah
              </h1>
              <p className="text-xs text-center text-white">
                Intern Video Production
              </p>
              <Button
                onClick={() => setCharacterTwo(!characterTwo)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={Samson}
              alt={Samson}
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Arrizky Putra Ramadhan
              </h1>
              <p className="text-xs text-center text-white">
                Intern CopyWriter
              </p>
              <Button
                onClick={() => setCharacterThree(!characterThree)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Cipa}
              alt={Cipa}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Aurelia Syifa Indrayana
              </h1>
              <p className="text-xs text-white">Intern Content Creator</p>
              <Button
                onClick={() => setCharacterFor(!characterFor)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Nadiras}
              alt={Nadiras}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Nadira Refiana
              </h1>
              <p className="text-xs text-white">Intern Content Creator</p>
              <Button
                onClick={() => setCharacterFive(!characterFive)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Dinda}
              alt={Dinda}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-white m-auto">Dinda Saddono</h1>
              <p className="text-xs text-center text-white">
                Intern CopyWritter
              </p>
              <Button
                onClick={() => setCharacterSix(!characterSix)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Daffa}
              alt={Daffa}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Muhammad Daffa Syabana Tiandi
              </h1>
              <p className="text-center text-xs text-white">
                Intern KOL Specialis
              </p>
              <Button
                onClick={() => setCharacterSeven(!characterSeven)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
              src={Kenny}
              alt={Kenny}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Kenny Kotambunan
              </h1>
              <p className="text-center text-xs text-white">
                Intern KOL Specialis
              </p>
              <Button
                onClick={() => setCharacterEight(!characterEight)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Kibil}
              alt={Kibil}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Nabila Nada Azizah
              </h1>
              <p className="text-xs text-white">Intern Graphic Design</p>
              <Button
                onClick={() => setCharacterNine(!characterOne)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto shadow-sm shadow-slate-600"
              src={Opal}
              alt={Opal}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Mochamad Naufal Aufa Rifqi
              </h1>
              <p className="text-xs text-center text-white">
                Intern Front End Developer Hehe
              </p>
              <Button
                onClick={() => setCharacterTen(!characterTen)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Valez}
              alt={Valez}
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-center text-white">
                Valezka Enguine
              </h1>
              <p className="text-xs text-white">Intern Content Creator</p>
              <Button
                onClick={() => setCharacterOne(!characterOne)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Daffiz}
              alt={Daffiz}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Naufal Hadafiz</h1>
              <p className="text-xs text-center text-white">
                Intern Video Production
              </p>
              <Button
                onClick={() => setCharacterOne(!characterOne)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              className="border p-2 rounded-lg m-auto  shadow-sm shadow-slate-600"
              src={Fawwaz}
              alt={Fawwaz}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid place-content-center place-items-center bg-black/40">
              <h1 className="font-bold text-white">Muhammad Fawwaz Wijaya</h1>
              <p className="text-xs text-center text-white">
                Intern Video Editor
              </p>
              <Button
                onClick={() => setCharacter13(!character13)}
                className="bg-black text-white mt-11"
              >
                Select Character
              </Button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Character;
