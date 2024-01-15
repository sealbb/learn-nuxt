<script setup>
import { animate, timeline } from "motion"
import scrollama from "scrollama"
import AOS from "aos"
import "animate.css"
import PlusIcon from "~/component/icon/PlusIcon.vue"
import MinusIcon from "~/component/icon/MinusIcon.vue"
import { onMounted } from "vue"
const policy = ref(false)
const handdlePolicy = () => {
  policy.value = false
}
const box1 = ref(false)
const handleBox1 = () => {
  box1.value = !box1.value
}
const box2 = ref(false)
const handleBox2 = () => {
  box2.value = !box2.value
}

const scroller = scrollama()
onMounted(() => {
  const handleStepEnterBox = (response) => {
    const bg = document.querySelector("#intro_bg")

    if (response.direction === "down") {
      bg.classList.add("fade-in")
    } else {
      bg.classList.remove("fade-in")
    }
    console.log("ถึงแล้วจ้า")
  }
  const handleStepEnterBox2 = (response) => {
    const ov1 = document.querySelector("#overlay_1")
    if (response.direction === "down") {
      ov1.style.opacity = 0.8
    } else {
      ov1.style.opacity = 0
    }
  }

  const handleStepEnterBox3 = (response) => {
    const ov2 = document.querySelector("#overlay_2")
    const ov1 = document.querySelector("#overlay_1")

    if (response.direction === "down") {
      ov2.style.opacity = 1
      ov1.style.opacity = 0
      console.log("ถึงแล้วจ้า3")
    } else if (response.direction === "up") {
      ov2.style.opacity = 0
      ov1.style.opacity = 1
    } else {
      ov2.style.opacity = 0
    }
  }
  const handleStepEnterBox4 = (response) => {
    const ov3 = document.querySelector("#overlay_3")
    const ov2 = document.querySelector("#overlay_2")
    if (response.direction === "down") {
      ov3.style.opacity = 0.8
      ov2.style.opacity = 0
      console.log("ถึงแล้วจ้า4")
    } else if (response.direction === "up") {
      ov3.style.opacity = 0
      ov2.style.opacity = 1
    } else {
      ov3.style.opacity = 0
    }
  }

  const handleStepEnterBox5 = (response) => {
    const ov4 = document.querySelector("#overlay_4")
    const ov3 = document.querySelector("#overlay_3")

    if (response.direction === "down") {
      ov4.style.opacity = 0.8
      ov3.style.opacity = 0
      console.log("ถึงแล้วจ้า4")
    } else if (response.direction === "up") {
      ov4.style.opacity = 0
      ov3.style.opacity = 0.8
    } else {
      ov4.style.opacity = 0
    }
  }
  const handleStepEnterBoxZoom = (response) => {
    const ov4 = document.querySelector("#overlay_4")
    const bg = document.querySelector("#intro_bg")
    if (response.direction === "down") {
      bg.classList.add("zoom-in")
      ov4.style.opacity = 0
    } else if (response.direction === "up") {
      ov4.style.opacity = 1
      bg.classList.remove("zoom-in")
    } else {
      bg.classList.remove("zoom-in")
    }
  }

  const handleStepEnterFocus = (response) => {
    const p1 = document.querySelector(".people1")
    const p2 = document.querySelector(".people2")
    const p3 = document.querySelector(".people3")
    const p4 = document.querySelector(".people4")
    const p5 = document.querySelector(".people5")
    const p6 = document.querySelector(".people6")
    const p7 = document.querySelector(".people7")
    if (response.direction === "down") {
      p1.classList.add("p1")
      p2.classList.add("p2")
      p3.classList.add("p3")
      p4.classList.add("p4")
      p5.classList.add("p5")
      p6.classList.add("p6")
      p7.classList.add("p7")
    } else if (response.direction === "up") {
      p1.classList.remove("p1")
      p2.classList.remove("p2")
      p3.classList.remove("p3")
      p4.classList.remove("p4")
      p5.classList.remove("p5")
      p6.classList.remove("p6")
      p7.classList.remove("p7")
    } else {
      focus.classList.remove("p1")
      focus.classList.remove("p2")
      focus.classList.remove("p3")
      focus.classList.remove("p4")
      focus.classList.remove("p5")
      focus.classList.remove("p6")
      focus.classList.remove("p7")
    }
  }

  const handleStepEnterFadeBg = (response) => {
    const bg = document.querySelector(".last")
    if (response.direction === "down") {
      bg.style.backgroundColor = "black"
    } else if (response.direction === "up") {
      bg.style.backgroundColor = "white"
    } else {
      bg.style.backgroundColor = "white"
    }
  }
  const init = () => {
    scroller
      .setup({
        step: ".box, .box2, .box3, .box-zoom, .box4, .box5, .focus , .fade-bg",
        offset: 0.9,
        debug: false,
      })
      .onStepEnter((response) => {
        if (response.element.classList.contains("box")) {
          handleStepEnterBox(response)
        } else if (response.element.classList.contains("box2")) {
          handleStepEnterBox2(response)
        } else if (response.element.classList.contains("box3")) {
          handleStepEnterBox3(response)
        } else if (response.element.classList.contains("box-zoom")) {
          handleStepEnterBoxZoom(response)
        } else if (response.element.classList.contains("box4")) {
          handleStepEnterBox4(response)
        } else if (response.element.classList.contains("box5")) {
          handleStepEnterBox5(response)
        } else if (response.element.classList.contains("focus")) {
          handleStepEnterFocus(response)
        } else if (response.element.classList.contains("fade-bg")) {
          handleStepEnterFadeBg(response)
        }
      })

    window.addEventListener("resize", scroller.resize)
  }
  init()
})
</script>

<template>
  <div class="w-full relative">
    <div class="relative">
      <div
        class="fixed top-0 z-0 w-full h-screen overflow-x-hidden lg:overflow-y-hidden"
      >
        <img
          src="/intro_bg.jpg"
          id="intro_bg"
          class="w-full opacity-50 z-0 fixed top-0 left-0"
          style="
            opacity: 0.5;
            transform: scale(1);
            transition: opacity 1s, transform 1s;
          "
        />
        <img
          src="/overlay_1.png"
          id="overlay_1"
          style="opacity: 0; transition: opacity 1.5s ease"
          class="z-10 absolute"
        />
        <img
          src="/overlay_2.png"
          id="overlay_2"
          style="opacity: 0; transition: opacity 1.5s ease"
          class="z-10 absolute"
        />
        <img
          src="/overlay_3.png"
          id="overlay_3"
          style="opacity: 0; transition: opacity 1.5s ease"
          class="z-10 absolute"
        />
        <img
          src="/overlay_4.png"
          id="overlay_4"
          style="opacity: 0; transition: opacity 1.5s ease"
          class="z-10 absolute"
        />
      </div>
      <div
        v-show="policy"
        class="content bg-black/70 text-white text-center px-20 space-y-5 py-5 fixed bottom-0"
      >
        <p>
          The Visual Thai PBS ให้ความสำคัญต่อข้อมูลส่วนบุคคลของคุณ เราใช้คุกกี้
          (Cookies)
          เพื่อจุดประสงค์ในการพัฒนาประสบการณ์การใช้งานในเว็บไซต์นี้เท่านั้น
          และจะไม่กระทำการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคลของคุณ
          เพื่อประโยชน์อย่างอื่น
          การเข้าใช้งานเว็บไซต์นี้ถือว่าคุณได้อนุญาตให้เราใช้คุกกี้ตามเงื่อนไขที่แจ้งไว้
        </p>

        <button @click="handdlePolicy" class="border px-4 py-2 rounded-lg">
          ยอมรับ
        </button>
      </div>
      <div
        class="relative z-10 flex justify-center items-center text-center h-screen"
      >
        <h1 class="h1 heading">
          ออกแบบอย่างไร? <br />ให้ไม่ทิ้งใคร...ไว้ข้างหลัง
        </h1>
      </div>
      <div class="relative z-10 flex justify-center text-center h-screen">
        <div
          class="box content text-[24px] bg-white max-w-[490px] p-5 my-auto mx-auto text-center"
        >
          <h2 class="animate__bounce">
            ทุกวันนี้เราอาศัยอยู่ในสังคมที่อุดมไปด้วยความหลากหลาย ผู้คนต่างเพศ
            ต่างวัย ล้วนใช้ชีวิตอยู่ในสภาพแวดล้อมเดียวกัน
          </h2>
        </div>
      </div>
      <div class="relative z-20 flex justify-center text-center h-screen">
        <div
          class="box2 content text-[24px] bg-white max-w-[490px] p-5 my-auto mx-auto text-center"
        >
          <span class="font-semibold">18% </span>
          ของประชากรไทย เป็นกลุ่มผู้สูงอายุ (60 ปีขึ้นไป) ซึ่งเท่ากับ 12 ล้านคน
          โดยเพิ่มขึ้นถึง 6 เท่า ภายในเวลา 50 ปี และคาดการณ์ว่า ในปี 2565
          ประเทศไทยจะมีประชากรผู้สูงอายุมากถึง 20% ซึ่งจะทำให้กลายเป็น<br />
          <span class="font-semibold">"สังคมสูงอายุอย่างสมบูรณ์"</span><br />
          <span class="text-sm text-gray-500"
            >ข้อมูลจากรายงานมูลนิธิสถาบันวิจัยและพัฒนาผู้สูงอายุไทย (มส.ผส.) ปี
            2563</span
          >
        </div>
      </div>
      <div class="relative z-10 flex justify-center text-center h-screen">
        <div
          class="box3 content text-[24px] bg-white max-w-[490px] p-5 my-auto mx-auto text-center"
        >
          <span class="font-semibold"
            >ขณะที่ 3.2% ของประชากรไทย เป็นคนพิการ</span
          >
          ซึ่งเท่ากับ 2,092,595 คน<br />
          <span class="text-sm text-gray-500">
            ข้อมูลจากการสำรวจจำนวนการออกบัตรประจำตัวคนพิการ
            โดยกระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์ ปี 2564
          </span>
        </div>
      </div>
      <div class="relative z-10 flex justify-center h-max">
        <div
          class="content text-[18px] bg-white max-w-[490px] p-5 my-auto mx-auto"
        >
          <div class="text-center">
            <span class="font-semibold text-[24px]">6 ประเภท "ความพิการ"</span
            ><br />
            ตามหลักเกณฑ์ของ<br />
            กระทรวงการพัฒนาสังคมและความมั่นคงของมนุษย์
          </div>
          <div class="h-[14px] bg-[#fe92ac]"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">
                  ความพิการทางการเคลื่อนไหวหรือทางร่างกาย
                </h1>
                <p class="text-sm font-bold">1,043,192 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากการมีความบกพร่องหรือการสูญเสียความสามารถของอวัยวะในการเคลื่อนไหว
              ได้แก่ มือ เท้า แขน ขา รวมถึง ความบกพร่องหรือความผิดปกติของศีรษะ
              ใบหน้า ลำตัว
            </p>
          </div>
          <div class="box4 h-[14px] bg-[#ffcb5c] w-2/5"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">
                  ความพิการทางการได้ยินหรือสื่อความหมาย
                </h1>
                <p class="text-sm font-bold">394,259 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากการมีความบกพร่องทางการได้ยิน แบ่งออกเป็น หูหนวก
              หูตึง รวมถึง คนที่มีข้อบกพร่องทางการสื่อความหมาย เช่น พูดไม่ได้
              หรือ พูดแล้วผู้อื่นไม่เข้าใจ ฯลฯ
            </p>
          </div>
          <div class="h-[14px] bg-[#ffa35c] w-1/5"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">ความพิการทางการเห็น</h1>
                <p class="text-sm font-bold">190,767 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากการมีความบกพร่องในการเห็น แบ่งย่อยออกแบบ ตาบอด และ
              ตาเห็นเลือนราง
            </p>
          </div>
          <div class="h-[14px] bg-[#8e7dfb] w-1/6"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">
                  ความพิการทางจิตใจ พฤติกรรม หรือออทิสติก
                </h1>
                <p class="text-sm font-bold">179,511 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากความบกพร่องทางจิตใจ หรือสมองในส่วนการรับรู้อารมณ์
              ความคิด รวมถึงกลุ่มออทิสติก
              ซึ่งเป็นบุคคลที่มีความบกพร่องทางพัฒนาการด้านสังคม ภาษา
              การสื่อความหมาย พฤติกรรมและอารมณ์
              โดยมีสาเหตุมาจากความผิดปกติของสมอง ที่แสดงก่อนอายุ 2 ปี ครึ่ง
            </p>
          </div>
          <div class="h-[14px] bg-[#57a3c8] w-1/6"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">ความพิการทางสติปัญญา</h1>
                <p class="text-sm font-bold">142,667 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากการมีพัฒนาการช้ากว่าปกติ
              หรือมีระดับเชาวน์ปัญญาต่ำกว่าบุคคลทั่วไป
              โดยความผิดปกตินั้นแสดงก่อนอายุ 18 ปี
            </p>
          </div>
          <div class="h-[14px] bg-[#91c9c5] w-[20px]"></div>
          <div class="my-5">
            <div class="flex items-center">
              <img
                src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/2.cb988e9.png"
                alt=""
                class="w-[60px] h-[60px] mr-[10px]"
              />
              <div>
                <h1 class="font-bold text-[24px]">ความพิการทางการเรียนรู้</h1>
                <p class="text-sm font-bold">13,126 คน</p>
              </div>
            </div>
            <p class="mt-3">
              บุคคลที่มีข้อจำกัดในการปฏิบัติกิจกรรมในชีวิตประจำวัน
              หรือการเข้าไปมีส่วนร่วมในกิจกรรมทางสังคม
              ซึ่งเป็นผลมาจากความบกพร่องทางสมอง
              ทำให้เกิดความบกพร่องทางด้านการอ่าน เขียน คิดคำนวณ
              หรือกระบวนการเรียนรู้พื้นฐานอื่น ๆ
              ซึ่งสามารถแสดงความสามารถได้ต่ำกว่าเกณฑ์มาตรฐานตามช่วงอายุและระดับสติปัญญา
            </p>
          </div>
          <div class="h-[14px] bg-[#bfc6c6] w-[50px]"></div>
          <div class="my-5">
            <h1 class="font-bold text-[18px]">
              นอกจากนี้ยังมีประชากรไทยอีก 129,073 คน ผู้มีลักษณะความพิการมากกว่า
              1 ประเภท และ รอข้อมูลยืนยัน
            </h1>
          </div>
        </div>
      </div>
      <div class="relative z-10 flex justify-center text-center h-screen">
        <div
          class="box5 content text-[24px] bg-white max-w-[490px] p-5 my-auto mx-auto text-center"
        >
          <span class="font-semibold"
            >จากสถิติพอจะเห็นได้ว่า
            มีผู้สูงอายุและคนพิการอยู่ร่วมในสังคมกับเราไม่น้อย
            แล้วคุณคิดว่าสภาพแวดล้อมเมืองไทย
            เหมาะกับการใช้ชีวิตของคนกลุ่มนี้แค่ไหน</span
          >
        </div>
      </div>
      <div class="relative z-10 flex justify-center text-center h-screen">
        <div
          class="box-zoom content text-[24px] bg-black/70 max-w-[490px] p-5 my-auto mx-auto text-center text-white"
        >
          <span id="trigger-bg" class="font-semibold"
            >เรามาดูกันดีกว่าว่า การออกแบบเมืองในสังคมไทย
            ทำให้การใช้ชีวิตของผู้สูงอายุและคนพิการในเมืองไทย
            ต้องพบเจออะไรบ้าง</span
          >
        </div>
      </div>
    </div>
    <div
      class="relative z-10 flex bg-white items-center justify-center flex-col py-32 gap-3"
    >
      <div
        class="relative flex items-center justify-center flex-col py-32 gap-7"
      >
        <h1 class="h1 my-10">ชีวิตในบ้าน</h1>
        <img src="/house.jpg" alt="" class="w-[620px]" />
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox1"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box1" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white grid grid-cols-2 gap-10 w-full p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">
                การ "พลัดตกหกล้ม" จากโครงสร้างที่ไม่รับประกันความปลอดภัย
              </h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ผู้สูงอายุ</p>
              <p>คนพิการทางการมองเห็น</p>
              <p>คนพิการทางการเคลื่อนไหว</p>
            </div>
          </div>
        </div>
        <div v-show="box1" class="content max-w-[650px] text-[24px]">
          การพลัดตกหกล้มในผู้สูงอายุเป็นสาเหตุการเสียชีวิตอันดับสอง
          รองจากอุบัติเหตุจากการขนส่ง มีผู้เสียชีวิตมากกว่า 1,000 คนต่อปี
          อ้างอิงจาก ข้อมูลมรณบัตร กองยุทธศาสตร์และแผนงาน
          สำนักงานปลัดกระทรวงสาธารณสุข
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">การตกแต่งบ้านที่ฉูดฉาดเกินไป</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ออทิสติก</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
      </div>
      <div
        class="relative flex items-center justify-center flex-col py-32 gap-3"
      >
        <h1 class="h1 my-10">ชีวิตกับการเดินทาง</h1>
        <img
          src="https://d24sx0drox09ud.cloudfront.net/transport.jpg"
          alt=""
          class="w-full"
        />
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox1"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box1" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white grid grid-cols-2 gap-10 w-full p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">ชีวิตบนทางเท้ากับอุปสรรคในรูปแบบต่าง ๆ</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ผู้สูงอายุ</p>
              <p>คนพิการทางการมองเห็น</p>
              <p>คนพิการทางการเคลื่อนไหว</p>
            </div>
          </div>
        </div>
        <div v-show="box1" class="content max-w-[650px] text-[24px]">
          การพลัดตกหกล้มในผู้สูงอายุเป็นสาเหตุการเสียชีวิตอันดับสอง
          รองจากอุบัติเหตุจากการขนส่ง มีผู้เสียชีวิตมากกว่า 1,000 คนต่อปี
          อ้างอิงจาก ข้อมูลมรณบัตร กองยุทธศาสตร์และแผนงาน
          สำนักงานปลัดกระทรวงสาธารณสุข
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">เบรลล์บล็อกที่ไม่ต่อเนื่อง</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>คนพิการทางการมองเห็น</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">
                รถไฟฟ้าและสิ่งอำนวยความสะดวกที่ไม่ได้มีทุกทางออก
              </h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ผู้สูงอายุ</p>
              <p>คนพิการทางการมองเห็น</p>
              <p>คนพิการทางการเคลื่อนไหว</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">รถเมล์ที่ไม่ใช่ทุกคนจะขึ้นสะดวก</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ผู้สูงอายุ</p>
              <p>คนพิการทางการมองเห็น</p>
              <p>คนพิการทางการเคลื่อนไหว</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
      </div>
      <div
        class="relative flex items-center justify-center flex-col py-32 gap-3"
      >
        <h1 class="h1 my-10">ชีวิตในพื้นที่สาธารณะ</h1>
        <img
          src="https://d24sx0drox09ud.cloudfront.net/public.jpg"
          alt=""
          class="w-full"
        />
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox1"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box1" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white grid grid-cols-2 gap-10 w-full p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">ป้ายชวนสับสน</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ผู้สูงอายุ</p>
              <p>คนพิการทางการมองเห็น</p>
              <p>คนพิการทางการได้ยิน</p>
              <p>คนพิการด้านสติปัญญา</p>
              <p>คนพิการทางการเรียนรู้</p>
            </div>
          </div>
        </div>
        <div v-show="box1" class="content max-w-[650px] text-[24px]">
          การพลัดตกหกล้มในผู้สูงอายุเป็นสาเหตุการเสียชีวิตอันดับสอง
          รองจากอุบัติเหตุจากการขนส่ง มีผู้เสียชีวิตมากกว่า 1,000 คนต่อปี
          อ้างอิงจาก ข้อมูลมรณบัตร กองยุทธศาสตร์และแผนงาน
          สำนักงานปลัดกระทรวงสาธารณสุข
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">สวนสาธารณะมีสิ่งอำนวยความสะดวกไม่เพียงพอ</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>คนพิการทางการได้ยิน</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">การเลือกซื้อสินค้า</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>คนพิการทางการมองเห็น</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
        <div
          class="flex items-center cursor-pointer w-full lg:max-w-[1280px] mx-auto justify-center"
          @click="handleBox2"
        >
          <div class="text-3xl mr-4">
            <PlusIcon v-if="!box2" />
            <MinusIcon v-else />
          </div>
          <div
            class="bg-black rounded-2xl text-white w-full grid grid-cols-2 gap-10 p-8 max-w-5xl text-start"
          >
            <div class="space-y-3">
              <h1 class="text-4xl">สถานที่พลุกพล่าน</h1>
              <p class="text-zinc-400">
                กดเพื่อ<span v-if="!box1">ดู</span
                ><span v-else>ซ่อน</span>รายละเอียด
              </p>
            </div>
            <div class="text-xl">
              <p>ออทิสติก</p>
            </div>
          </div>
        </div>
        <div v-show="box2" class="content max-w-[650px] text-[24px]">
          การตกแต่งภายในตัวบ้าน ด้วยผนัง พื้น หรือหลอดไฟหลากสีสัน
          อาจเป็นสไตล์ที่ดูสดใส จัดจ้านสำหรับใครหลายคน
          แต่สิ่งเหล่านี้กลับเป็นอุปสรรคสำหรับคนพิการในกลุ่มอาการออทิสติก
          ซึ่งมักมีจุดร่วมกันตรงที่ความอ่อนไหวต่อสิ่งเร้าตามประสาทสัมผัสต่าง ๆ
          ซึ่งพวกเขาจะสามารถรับรู้ได้มากกว่าคนปกติ เช่น
          สภาพแวดล้อมในบ้านที่มีแสงจ้า ไฟกะพริบ สีที่มากกว่า 3 - 4 สี
          เสียงจากแหล่งกำเนิดหลายแหล่ง สิ่งเหล่านี้อาจทำให้คนพิการในกลุ่มนี้
          รู้สึกอึดอัดหรือไม่สบายใจได้
          เนื่องจากจะทำให้พวกเขาไม่รู้ว่าจะต้องโฟกัสอยู่ที่จุดไหน
        </div>
      </div>
    </div>
    <div
      class="last bg-white relative"
      style="transition: opacity 1s, transform 1s"
    >
      <div class="h-screen flex justify-center items-center">
        <div class="fade-bg text-white text-center space-y-6">
          <h1 class="text-4xl">จากการออกแบบทีทอดทิ้งใครหลายคนไว้ข้างหลัง</h1>
          <h1 class="font-bold text-5xl">เราจะแก้ปัญหานี้กันอย่างไร</h1>
        </div>
        <img
          class="people1 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_1.f5fcff0.svg"
          alt=""
        />
        <img
          class="people2 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_2.52aee37.svg"
          alt=""
        /><img
          class="people3 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_3.9b77f65.svg"
          alt=""
        />
        <img
          class="people4 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_4.fec17ba.svg
"
          alt=""
        /><img
          class="people5 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_5.82b072c.svg"
          alt=""
        />
        <img
          class="people6 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_6.1ac5eff.svg"
          alt=""
        />

        <img
          class="people7 peop"
          src="https://thevisual.thaipbs.or.th/universaldesign/_nuxt/img/people_7.810f260.svg
"
          alt=""
        />
      </div>

      <div class="h-screen flex flex-col items-center justify-center gap-10">
        <h1 class="text-white text-4xl text-wrap w-2/6 text-center">
          ในวงสนทนาเรื่องการออกแบบทั่วโลก
          มีการพูดคุยถึงแนวคิดการออกแบบเพื่อคนทุกคนหรือที่เรียกกันว่า
        </h1>
        <div
          class="focus z-40 bg-white text-black rounded-full w-20 h-20 text-center flex items-center justify-center"
        >
          hi
        </div>
        <h1 class="text-white text-center font-bold text-6xl">
          Universal <br />Design
        </h1>
      </div>
      <div
        class="flex flex-col items-center justify-center text-black w-2/5 mx-auto gap-20"
      >
        <p class="text-3xl content text-center">
          Universal Design
          เป็นการออกแบบที่คำนึงถึงการเข้าถึงและใช้ประโยชน์อย่างเท่าเทียมกันของคนทุกกลุ่มไม่ว่าจะเป็น
          ผู้สูงอายุ เด็ก คนพิการ คนป่วย สตรีมีครรภ์ ฯลฯ
          โดยไม่ได้หมายรวมแค่การออกแบบสิ่งแวดล้อม สถานที่
          สิ่งอำนวยความสะดวกเพียงเท่านี้ แต่รวมถึง การบริการรูปแบบต่าง ๆ อีกด้วย
          โดยอาจเรียกรวม ๆ ว่า Urban Design
        </p>
        <p class="text-3xl font-bold">
          Universal Design ให้ความสำคัญกับองค์ประกอบ 7 อย่าง
        </p>
        <div>
          <div class="rules">
            <h1 class="text-red-500">Fairness</h1>
            <p>ความเสมอภาคในการใช้งาน</p>
          </div>
          <div class="rules">
            <h1 class="text-orange-400">Flexibility</h1>
            <p>ความยืดหยุ่นในการใช้งาน</p>
          </div>
          <div class="rules">
            <h1 class="text-yellow-300">Simplicity</h1>
            <p>มีความเรียบง่ายและเข้าใจง่าย</p>
          </div>
          <div class="rules">
            <h1 class="text-red-300">Understanding</h1>
            <p>มีข้อมูลเพียงพอสำหรับการใช้งาน</p>
          </div>
          <div class="rules">
            <h1 class="text-purple-300">Safety</h1>
            <p>ทนทานต่อการใช้งานที่ผิดพลาด</p>
          </div>
          <div class="rules">
            <h1 class="text-cyan-700">Energy Conservation</h1>
            <p>สามารถทุ่นแรง</p>
          </div>
          <div class="rules">
            <h1 class="text-cyan-300">Space</h1>
            <p>มีขนาดและพื้นที่ที่เหมาะสม</p>
          </div>
        </div>
        <p class="text- text-3xl content text-center text-wrap mb-40 mt-20">
          โดยหลักการเหล่านี้ ไม่เพียงแค่นักออกแบบ วิศวกร
          หรือสถาปนิกเท่านั้นที่ต้องคำนึงถึง
          แต่หากเราตั้งใจจะสร้างเมืองที่เหมาะสมกับทุกคน.....อย่างแท้จริง
          <span class="font-bold"> Universal Design</span> ก็เป็นแนวคิดที่ทุกคนในสังคมต้องใส่ใจ และให้ความสำคัญ
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1>มาดูกันดีกว่าว่า Universal Design ช่วยแก้ปัญหาอะไรให้เราได้บ้าง</h1>

    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap");
* {
  scroll-behavior: smooth;
}
.rules {
  text-align: center;
}
.rules h1 {
  font-family: "Anuphan", sans-serif;
  font-weight: 500;
  font-size: 100px;
}
.rules p {
  font-family: "Anuphan", sans-serif;
  font-weight: 500;
  font-size: 24px;
  color: white;
}
@keyframes popup {
  from {
    transform: translateY(50%) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}
.active {
  opacity: 1;
}
.heading {
  animation: popup 0.5s ease-in-out;
}
.content {
  font-family: "Bai Jamjuree", sans-serif;
}
.h1 {
  font-family: "Anuphan", sans-serif;
  font-weight: 700;
  font-size: 48px;
}

#intro_bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  transition: opacity 1.5s ease;
}

@media screen and (max-width: 1023px) {
  #intro_bg {
    height: 100%;
    object-fit: cover;
    position: fixed;
    top: 0;
    left: 0;
  }
}
.zoom-in {
  transform: scale(2.5) translateY(8%) !important;
}
.fade-in {
  opacity: 1 !important;
}
.peop {
  position: absolute;
  transition: transform 2s ease;
}

.people1 {
  top: 7%;
  left: 80%;
}

.last {
  transition: opacity 1s, transform 1s;
}
.p1 {
  z-index: 30 !important;
  transform: translate(-610px, 1099px);
}

.people2 {
  top: 5%;
  left: 67%;
}

.p2 {
  z-index: 30 !important;
  transform: translate(-355px, 1175px);
}

.p3 {
  z-index: 30 !important;
  transform: translate(425px, 1180px);
}

.p4 {
  z-index: 30 !important;
  transform: translate(525px, 979px);
}

.p5 {
  z-index: 30 !important;
  transform: translate(725px, 879px);
}

.p6 {
  z-index: 30 !important;
  transform: translate(827px, 1181px);
}

.p7 {
  z-index: 30 !important;
  transform: translate(827px, 981px);
}
.people3 {
  top: 200px;
  left: 490px;
}

.people4 {
  top: 400px;
  left: 390px;
}

.people5 {
  top: 500px;
  left: 190px;
}

.people6 {
  top: 200px;
  left: 90px;
}

.people7 {
  top: 400px;
  left: 90px;
}
</style>
