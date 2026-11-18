const assetPathPrefix = "./assets"
const imgRectangle = `${assetPathPrefix}/a6140.png`
const imgRectangle1 = `${assetPathPrefix}/345b7.png`
const imgRectangle2 = `${assetPathPrefix}/e9302.png`
const imgRectangle3 = `${assetPathPrefix}/3cb6e.png`
const imgRectangle4 = `${assetPathPrefix}/78baa.png`
const imgRectangle5 = `${assetPathPrefix}/7ae88.png`
const imgRectangle6 = `${assetPathPrefix}/22aa4.png`
const imgRectangle7 = `${assetPathPrefix}/c988b.png`
const imgRectangle8 = `${assetPathPrefix}/de5dd.png`
const imgRectangle9 = `${assetPathPrefix}/952f4.png`
const imgRectangle10 = `${assetPathPrefix}/818a6.png`
const imgRectangle11 = `${assetPathPrefix}/3a872.png`
const imgRectangle13 = `${assetPathPrefix}/0a741.png`
const imgRectangle14 = `${assetPathPrefix}/3bf45.png`
const imgRectangle15 = `${assetPathPrefix}/1c57e.png`
const imgRectangle16 = `${assetPathPrefix}/82e0a.png`
const imgVector = `${assetPathPrefix}/bf54b.svg`
const imgVector1 = `${assetPathPrefix}/f821c.svg`
const imgVector2 = `${assetPathPrefix}/13e1f.svg`
const imgVector3 = `${assetPathPrefix}/d5042.svg`
const imgVector4 = `${assetPathPrefix}/0c114.svg`
const imgVector5 = `${assetPathPrefix}/bd5ed.svg`
const imgVector6 = `${assetPathPrefix}/0721b.svg`
const imgVector7 = `${assetPathPrefix}/b2d44.svg`
const imgVector8 = `${assetPathPrefix}/ebb04.svg`
const imgVector9 = `${assetPathPrefix}/1b688.svg`
const imgVector10 = `${assetPathPrefix}/dd422.svg`
const imgVector11 = `${assetPathPrefix}/d1550.svg`
const imgVector12 = `${assetPathPrefix}/0405d.svg`
const imgVector13 = `${assetPathPrefix}/0f28a.svg`
const imgVector14 = `${assetPathPrefix}/04a09.svg`
const imgVector15 = `${assetPathPrefix}/419b0.svg`
const imgGroup = `${assetPathPrefix}/f218a.svg`
const imgGroup1 = `${assetPathPrefix}/9051c.svg`
const imgVector16 = `${assetPathPrefix}/c12ff.svg`
const imgVector17 = `${assetPathPrefix}/2d260.svg`
const imgRectangle12 = `${assetPathPrefix}/d2710.svg`
const imgVector18 = `${assetPathPrefix}/42715.svg`
const imgGroup2 = `${assetPathPrefix}/b68be.svg`
const imgVector19 = `${assetPathPrefix}/87ed6.svg`
const imgGroup3 = `${assetPathPrefix}/0fa9b.svg`
const imgVector20 = `${assetPathPrefix}/4c3a0.svg`
const imgVector21 = `${assetPathPrefix}/d7683.svg`
const imgVector22 = `${assetPathPrefix}/96ecb.svg`
const imgVector23 = `${assetPathPrefix}/6e237.svg`
const imgVector24 = `${assetPathPrefix}/221fe.svg`
const imgVector25 = `${assetPathPrefix}/87288.svg`
const imgVector26 = `${assetPathPrefix}/c7e44.svg`
const imgVector27 = `${assetPathPrefix}/6eac6.svg`
const imgVector28 = `${assetPathPrefix}/249fb.svg`
const imgVector29 = `${assetPathPrefix}/8662f.svg`
const imgVector30 = `${assetPathPrefix}/42ddc.svg`
const imgGroup4 = `${assetPathPrefix}/f46d4.svg`
const imgVector31 = `${assetPathPrefix}/c6ea3.svg`
const imgVector32 = `${assetPathPrefix}/1b863.svg`
const imgVector33 = `${assetPathPrefix}/39af6.svg`
const imgSubtract = `${assetPathPrefix}/6ac85.svg`
const imgSubtract1 = `${assetPathPrefix}/c6ae6.svg`

type ProductTabProps = {
  className?: string
  label?: string
  state?: "Selected"
}

function ProductTab({
  className,
  label = "BEST",
  state = "Selected",
}: ProductTabProps) {
  return (
    <div
      className={
        className ||
        "bg-[#10202d] border-[#10202d] border-[1.5px] border-solid content-stretch flex h-[36px] items-center justify-center min-w-[96px] overflow-clip relative rounded-[4px] w-[96px]"
      }
      data-node-id="64:33"
    >
      <p
        className="[word-break:break-word] font-['Noto_Sans_KR:Medium'] font-medium leading-[26px] relative shrink-0 text-[16px] text-white whitespace-nowrap"
        data-node-id="64:34"
      >
        {label}
      </p>
    </div>
  )
}

type SkinConcernChipProps = {
  className?: string
  label?: string
  state?: "Default"
}

function SkinConcernChip({
  className,
  label = "건조 및 당김",
  state = "Default",
}: SkinConcernChipProps) {
  return (
    <button
      className={
        className ||
        "bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch flex h-[44px] items-center justify-center overflow-clip relative rounded-[4px] w-[198px]"
      }
      data-node-id="64:10"
    >
      <p
        className="[word-break:break-word] font-['Noto_Sans_KR:Medium'] font-medium leading-[22px] relative shrink-0 text-[#10202d] text-[14px] text-left whitespace-nowrap"
        data-node-id="64:11"
      >
        {label}
      </p>
    </button>
  )
}

export default function Component() {
  return (
    <div
      className="bg-white relative size-full"
      data-node-id="64:622"
      data-name="메이크업"
    >
      <div
        className="absolute contents left-[-1px] top-0"
        data-node-id="64:623"
        data-name="서브 메이크업"
      >
        <div
          className="absolute inset-[0_0.05%_99.13%_-0.05%]"
          data-node-id="64:624"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector}
          />
        </div>
        <div
          className="[word-break:break-word] absolute contents font-['Noto_Sans_KR:Regular'] font-normal inset-[0.16%_17.08%_99.28%_72.24%] leading-[normal] text-[#10202d] text-[15px] whitespace-nowrap"
          data-node-id="64:625"
          data-name="Group"
        >
          <p
            className="absolute inset-[0.16%_24.84%_99.28%_72.24%]"
            data-node-id="64:626"
          >
            매장찾기
          </p>
          <p
            className="absolute inset-[0.16%_21.3%_99.28%_75.78%]"
            data-node-id="64:627"
          >
            고객센터
          </p>
          <p
            className="absolute inset-[0.16%_17.08%_99.28%_79.53%]"
            data-node-id="64:628"
          >
            / 회원가입
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[1.53%_78.33%_97.69%_16.61%] leading-[normal] text-[#10202d] text-[21px]"
          data-node-id="64:629"
        >
          한국화장품
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_71.15%_97.75%_25.94%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:630"
        >
          전체제품
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_62.58%_97.75%_32.79%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:631"
        >
          신제품/캠페인
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_55.6%_97.75%_41.33%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:632"
        >
          맞춤 추천
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_48.28%_97.75%_48.39%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:633"
        >
          성분·연구
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_39.77%_97.75%_55.7%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:634"
        >
          브랜드 스토리
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.69%_32.92%_97.75%_64.17%] leading-[normal] text-[#10202d] text-[15px] text-center"
          data-node-id="64:635"
        >
          고객지원
        </p>
        <div
          className="absolute inset-[1.33%_16.74%_97.33%_70.81%]"
          data-node-id="64:636"
          data-name="Vector"
        >
          <div className="absolute inset-[-1.16%_-0.21%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector1}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[1.75%_20.36%_97.57%_71.61%] leading-[normal] text-[#9aa3ad] text-[18px] whitespace-nowrap"
          data-node-id="64:637"
        >
          검색어를 입력하세요
        </p>
        <div
          className="absolute inset-[1.75%_17.76%_97.81%_81.51%]"
          data-node-id="64:638"
          data-name="Vector"
        >
          <div className="absolute inset-[-5.68%_-5.71%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector2}
            />
          </div>
        </div>
        <div
          className="absolute inset-[2.12%_17.6%_97.72%_82.14%]"
          data-node-id="64:639"
          data-name="Vector"
        >
          <div className="absolute inset-[-15.9%_-16%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector3}
            />
          </div>
        </div>
        <div
          className="absolute inset-[3.14%_0.05%_96.86%_-0.05%]"
          data-node-id="64:640"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.5px_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector4}
            />
          </div>
        </div>
        <div
          className="[word-break:break-word] absolute contents font-['Noto_Sans_KR:Regular'] font-normal inset-[20%_76.72%_79.25%_16.61%] leading-[normal] text-[#10202d] text-[20px]"
          data-node-id="64:641"
          data-name="Group"
        >
          <p
            className="absolute inset-[20%_82.4%_79.25%_16.61%]"
            data-node-id="64:642"
          >
            홈
          </p>
          <p
            className="absolute inset-[20%_76.72%_79.25%_19.43%]"
            data-node-id="64:643"
          >
            전체제품
          </p>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[20.03%_71.09%_79.22%_25.05%] leading-[normal] text-[#10202d] text-[20px]"
          data-node-id="64:644"
        >
          메이크업
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[21.91%_77.34%_77.19%_16.61%] leading-[normal] text-[#10202d] text-[24px]"
          data-node-id="64:645"
        >
          제품 유형별
        </p>
        <div
          className="absolute inset-[22.09%_74.95%_77.41%_24.53%]"
          data-node-id="64:646"
          data-name="Vector"
        >
          <div className="absolute inset-[-6.83%_-11%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector5}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[22%_18.8%_77.31%_76.2%] leading-[0] text-[#7b8591] text-[0px] text-right"
          data-node-id="64:647"
        >
          <span className="leading-[normal] text-[18px]">{`총 `}</span>
          <span className="font-['Noto_Sans_KR:Bold'] font-bold leading-[normal] text-[#10202d] text-[18px]">
            12
          </span>
          <span className="leading-[normal] text-[18px]">개 상품</span>
        </p>
        <div
          className="absolute inset-[22.28%_17.55%_77.53%_81.82%]"
          data-node-id="64:648"
          data-name="Vector"
        >
          <div className="absolute inset-[-12.42%_-6.25%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector6}
            />
          </div>
        </div>
        <div
          className="absolute inset-[23.8%_16.72%_76.2%_16.61%]"
          data-node-id="64:649"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.5px_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector7}
            />
          </div>
        </div>
        <div
          className="absolute contents inset-[25.03%_68.28%_63.42%_16.61%]"
          data-node-id="64:650"
          data-name="Group"
        >
          <div
            className="absolute inset-[25.05%_68.31%_63.42%_16.64%]"
            data-node-id="64:651"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[25.03%_68.28%_65.91%_16.61%]"
            data-node-id="64:652"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[25.03%_68.28%_65.91%_16.61%]"
              data-node-id="64:655"
              data-name="Group"
            >
              <div
                className="absolute inset-[25.03%_68.28%_65.91%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:656"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[25.03%_68.28%_65.91%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:657"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[25.47%_69.01%_73.28%_28.91%]"
            data-node-id="64:658"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[25.84%_69.6%_73.69%_29.49%]"
            data-node-id="64:659"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[34.72%_80.42%_64.75%_17.55%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:660"
          >
            베이스
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[35.38%_76.3%_63.94%_17.55%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:661"
          >
            명휘 베이스 1호
          </p>
        </div>
        <div
          className="absolute contents inset-[25.03%_51.09%_63.42%_33.8%]"
          data-node-id="64:662"
          data-name="Group"
        >
          <div
            className="absolute inset-[25.05%_51.12%_63.42%_33.83%]"
            data-node-id="64:663"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[25.03%_51.09%_65.91%_33.8%]"
            data-node-id="64:664"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[25.03%_51.09%_65.91%_33.8%]"
              data-node-id="64:667"
              data-name="Group"
            >
              <div
                className="absolute inset-[25.03%_51.09%_65.91%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:668"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[25.03%_51.09%_65.91%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:669"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[25.47%_51.82%_73.28%_46.09%]"
            data-node-id="64:670"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[25.84%_52.41%_73.69%_46.68%]"
            data-node-id="64:671"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <div
            className="absolute inset-[25.47%_62.66%_73.72%_34.53%]"
            data-node-id="64:672"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector13}
            />
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[25.66%_63.26%_73.91%_35.13%] leading-[normal] text-[12px] text-center text-white"
            data-node-id="64:673"
          >
            BEST
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[34.72%_61.56%_64.75%_34.74%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:674"
          >
            베이스 · BB
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[35.38%_56.82%_63.94%_34.74%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:675"
          >
            효움 순 발효 비비크림
          </p>
        </div>
        <div
          className="absolute contents inset-[25.03%_33.91%_63.42%_50.99%]"
          data-node-id="64:676"
          data-name="Group"
        >
          <div
            className="absolute inset-[25.05%_33.93%_63.42%_51.02%]"
            data-node-id="64:677"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[25.03%_33.91%_65.91%_50.99%]"
            data-node-id="64:678"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[25.03%_33.91%_65.91%_50.99%]"
              data-node-id="64:681"
              data-name="Group"
            >
              <div
                className="absolute inset-[25.03%_33.91%_65.91%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:682"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[25.03%_33.91%_65.91%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:683"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[25.47%_34.64%_73.28%_63.28%]"
            data-node-id="64:684"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[25.84%_35.22%_73.69%_63.87%]"
            data-node-id="64:685"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[34.72%_46.72%_64.75%_51.93%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:686"
          >
            아이
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[35.38%_38.33%_63.94%_51.93%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:687"
          >
            오션 HD 붓펜 아이라이너
          </p>
        </div>
        <div
          className="absolute contents inset-[25.03%_16.72%_63.42%_68.18%]"
          data-node-id="64:688"
          data-name="Group"
        >
          <div
            className="absolute inset-[25.05%_16.74%_63.42%_68.2%]"
            data-node-id="64:689"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[25.03%_16.72%_65.91%_68.18%]"
            data-node-id="64:690"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[25.03%_16.72%_65.91%_68.18%]"
              data-node-id="64:693"
              data-name="Group"
            >
              <div
                className="absolute inset-[25.03%_16.72%_65.91%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:694"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[25.03%_16.72%_65.91%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:695"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[25.47%_17.45%_73.28%_80.47%]"
            data-node-id="64:696"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[25.84%_18.03%_73.69%_81.05%]"
            data-node-id="64:697"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[34.72%_29.53%_64.75%_69.11%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:698"
          >
            아이
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[35.38%_20.26%_63.94%_69.11%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:699"
          >
            오션 HD 클리어 아이브로우
          </p>
        </div>
        <div
          className="absolute contents inset-[38.16%_68.28%_50.3%_16.61%]"
          data-node-id="64:700"
          data-name="Group"
        >
          <div
            className="absolute inset-[38.17%_68.31%_50.3%_16.64%]"
            data-node-id="64:701"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[38.16%_68.28%_52.78%_16.61%]"
            data-node-id="64:702"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[38.16%_68.28%_52.78%_16.61%]"
              data-node-id="64:705"
              data-name="Group"
            >
              <div
                className="absolute inset-[38.16%_68.28%_52.78%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:706"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[38.16%_68.28%_52.78%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:707"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[38.59%_69.01%_60.16%_28.91%]"
            data-node-id="64:708"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[38.96%_69.6%_60.56%_29.49%]"
            data-node-id="64:709"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[47.84%_81.09%_51.62%_17.55%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:710"
          >
            쿠션
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[48.5%_72.6%_50.81%_17.55%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:711"
          >
            명휘 글로우 쿠션 1호/2호
          </p>
        </div>
        <div
          className="absolute contents inset-[38.16%_51.09%_50.3%_33.8%]"
          data-node-id="64:712"
          data-name="Group"
        >
          <div
            className="absolute inset-[38.17%_51.12%_50.3%_33.83%]"
            data-node-id="64:713"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[38.16%_51.09%_52.78%_33.8%]"
            data-node-id="64:714"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[38.16%_51.09%_52.78%_33.8%]"
              data-node-id="64:717"
              data-name="Group"
            >
              <div
                className="absolute inset-[38.16%_51.09%_52.78%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:718"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[38.16%_51.09%_52.78%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:719"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[38.59%_51.82%_60.16%_46.09%]"
            data-node-id="64:720"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[38.96%_52.41%_60.56%_46.68%]"
            data-node-id="64:721"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[47.84%_64.58%_51.62%_34.74%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:722"
          >
            립
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[48.5%_60.73%_50.81%_34.74%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:723"
          >
            명휘 립스틱
          </p>
        </div>
        <div
          className="absolute contents inset-[38.16%_33.91%_50.3%_50.99%]"
          data-node-id="64:724"
          data-name="Group"
        >
          <div
            className="absolute inset-[38.17%_33.93%_50.3%_51.02%]"
            data-node-id="64:725"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[38.16%_33.91%_52.78%_50.99%]"
            data-node-id="64:726"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[38.16%_33.91%_52.78%_50.99%]"
              data-node-id="64:729"
              data-name="Group"
            >
              <div
                className="absolute inset-[38.16%_33.91%_52.78%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:730"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[38.16%_33.91%_52.78%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:731"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle6}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[38.59%_34.64%_60.16%_63.28%]"
            data-node-id="64:732"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[38.96%_35.22%_60.56%_63.87%]"
            data-node-id="64:733"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[47.84%_47.4%_51.62%_51.93%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:734"
          >
            립
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[48.5%_41.61%_50.81%_51.93%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:735"
          >
            명휘 립세럼 스틱
          </p>
        </div>
        <div
          className="absolute contents inset-[38.16%_16.72%_50.3%_68.18%]"
          data-node-id="64:736"
          data-name="Group"
        >
          <div
            className="absolute inset-[38.17%_16.74%_50.3%_68.2%]"
            data-node-id="64:737"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[38.16%_16.72%_52.78%_68.18%]"
            data-node-id="64:738"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[38.16%_16.72%_52.78%_68.18%]"
              data-node-id="64:741"
              data-name="Group"
            >
              <div
                className="absolute inset-[38.16%_16.72%_52.78%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:742"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[38.16%_16.72%_52.78%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:743"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle7}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[38.59%_17.45%_60.16%_80.47%]"
            data-node-id="64:744"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[38.96%_18.03%_60.56%_81.05%]"
            data-node-id="64:745"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[47.84%_28.85%_51.62%_69.11%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:746"
          >
            베이스
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[48.5%_24.22%_50.81%_69.11%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:747"
          >
            로제 드 톤 베이스
          </p>
        </div>
        <div
          className="absolute contents inset-[51.28%_68.28%_37.17%_16.61%]"
          data-node-id="64:748"
          data-name="Group"
        >
          <div
            className="absolute inset-[51.3%_68.31%_37.17%_16.64%]"
            data-node-id="64:749"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[51.28%_68.28%_39.66%_16.61%]"
            data-node-id="64:750"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[51.28%_68.28%_39.66%_16.61%]"
              data-node-id="64:753"
              data-name="Group"
            >
              <div
                className="absolute inset-[51.28%_68.28%_39.66%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:754"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[51.28%_68.28%_39.66%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:755"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[51.72%_69.01%_47.03%_28.91%]"
            data-node-id="64:756"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[52.09%_69.6%_47.44%_29.49%]"
            data-node-id="64:757"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[60.97%_81.09%_38.5%_17.55%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:758"
          >
            아이
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[61.63%_72.71%_37.69%_17.55%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:759"
          >
            오션 HD 퍼펙트 마스카라
          </p>
        </div>
        <div
          className="absolute contents inset-[51.28%_51.09%_37.17%_33.8%]"
          data-node-id="64:760"
          data-name="Group"
        >
          <div
            className="absolute inset-[51.3%_51.12%_37.17%_33.83%]"
            data-node-id="64:761"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[51.28%_51.09%_39.66%_33.8%]"
            data-node-id="64:762"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[51.28%_51.09%_39.66%_33.8%]"
              data-node-id="64:765"
              data-name="Group"
            >
              <div
                className="absolute inset-[51.28%_51.09%_39.66%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:766"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[51.28%_51.09%_39.66%_33.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:767"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle9}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[51.72%_51.82%_47.03%_46.09%]"
            data-node-id="64:768"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[52.09%_52.41%_47.44%_46.68%]"
            data-node-id="64:769"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[60.97%_63.91%_38.5%_34.74%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:770"
          >
            쿠션
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[61.63%_56.3%_37.69%_34.74%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:771"
          >
            명휘 커버 쿠션 1호/2호
          </p>
        </div>
        <div
          className="absolute contents inset-[51.28%_33.91%_37.17%_50.99%]"
          data-node-id="64:772"
          data-name="Group"
        >
          <div
            className="absolute inset-[51.3%_33.93%_37.17%_51.02%]"
            data-node-id="64:773"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[51.28%_33.91%_39.66%_50.99%]"
            data-node-id="64:774"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[51.28%_33.91%_39.66%_50.99%]"
              data-node-id="64:777"
              data-name="Group"
            >
              <div
                className="absolute inset-[51.28%_33.91%_39.66%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:778"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[51.28%_33.91%_39.66%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:779"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle10}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[51.72%_34.64%_47.03%_63.28%]"
            data-node-id="64:780"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[52.09%_35.22%_47.44%_63.87%]"
            data-node-id="64:781"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[60.97%_41.93%_38.5%_51.93%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:782"
          >
            파우더 · 트윈케이크
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[61.63%_39.32%_37.69%_51.93%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:783"
          >
            명휘 트윈케익 1호/2호
          </p>
        </div>
        <div
          className="absolute contents inset-[51.28%_16.72%_37.17%_68.18%]"
          data-node-id="64:784"
          data-name="Group"
        >
          <div
            className="absolute inset-[51.3%_16.74%_37.17%_68.2%]"
            data-node-id="64:785"
            data-name="Vector"
          >
            <div className="absolute inset-[-0.13%_-0.17%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector8}
              />
            </div>
          </div>
          <div
            className="absolute contents inset-[51.28%_16.72%_39.66%_68.18%]"
            data-node-id="64:786"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[51.28%_16.72%_39.66%_68.18%]"
              data-node-id="64:789"
              data-name="Group"
            >
              <div
                className="absolute inset-[51.28%_16.72%_39.66%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:790"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Vector"
              >
                <img
                  alt=""
                  className="absolute block inset-0 max-w-none size-full"
                  src={imgVector10}
                />
              </div>
              <div
                className="absolute inset-[51.28%_16.72%_39.66%_68.18%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[290px_291.813px]"
                data-node-id="64:791"
                style={{ maskImage: `url("${imgVector9}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle11}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[51.72%_17.45%_47.03%_80.47%]"
            data-node-id="64:792"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector11}
            />
          </div>
          <div
            className="absolute inset-[52.09%_18.03%_47.44%_81.05%]"
            data-node-id="64:793"
            data-name="Vector"
          >
            <div className="absolute inset-[-5.24%_-4.56%]">
              <img
                alt=""
                className="block max-w-none size-full"
                src={imgVector12}
              />
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:DemiLight'] font-[350] inset-[60.97%_27.5%_38.5%_69.11%] leading-[normal] text-[#7b8591] text-[14px]"
            data-node-id="64:794"
          >
            파운데이션
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[61.63%_24.64%_37.69%_69.11%] leading-[normal] text-[#10202d] text-[18px]"
            data-node-id="64:795"
          >
            명휘 파운데이션
          </p>
        </div>
        <div
          className="absolute inset-[66.8%_0.05%_15.5%_-0.05%]"
          data-node-id="64:796"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector14}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[67.91%_76.3%_31.34%_16.61%] leading-[normal] text-[#a88445] text-[20px]"
          data-node-id="64:797"
        >
          BRAND MOOD
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[68.76%_65.73%_30.06%_16.61%] leading-[normal] text-[#10202d] text-[32px]"
          data-node-id="64:798"
        >
          한국화장품 메이크업 무드
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[70.29%_66.15%_29.02%_16.61%] leading-[normal] text-[#7b8591] text-[18px]"
          data-node-id="64:799"
        >
          신선하고 감각적인 오늘의 컬러를 만나보세요
        </p>
        <div
          className="absolute contents inset-[71.69%_68.28%_16.43%_16.61%]"
          data-node-id="64:800"
          data-name="Group"
        >
          <div
            className="absolute inset-[71.69%_68.28%_16.43%_16.61%]"
            data-node-id="64:801"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector15}
            />
          </div>
          <div
            className="absolute contents inset-[71.69%_68.28%_16.43%_16.61%]"
            data-node-id="64:802"
            data-name="Clip path group"
          >
            <div
              className="absolute inset-[73.26%_68.28%_20.99%_16.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-50.313px] mask-size-[290px_382.375px]"
              data-node-id="64:805"
              style={{ maskImage: `url("${imgGroup}")` }}
              data-name="Group"
            >
              <div className="absolute inset-[0_0_-0.27%_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup1}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[76.63%_71.82%_18.56%_20.16%]"
            data-node-id="64:809"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector16}
            />
          </div>
          <div
            className="absolute inset-[76.79%_72.08%_18.71%_20.42%]"
            data-node-id="64:810"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector17}
            />
          </div>
          <div
            className="absolute contents inset-[76.79%_72.08%_18.71%_20.42%]"
            data-node-id="64:811"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[76.06%_70.96%_17.94%_19.17%]"
              data-node-id="64:814"
              data-name="Group"
            >
              <div
                className="absolute inset-[76.06%_70.96%_17.94%_19.17%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23.9px_23.345px] mask-size-[144px_144.9px]"
                data-node-id="64:815"
                style={{ maskImage: `url("${imgRectangle12}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle13}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[81.91%_73.28%_17.52%_21.61%] leading-[normal] text-[#10202d] text-[15px] text-center"
            data-node-id="64:816"
          >
            PEACH GLOW
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[82.66%_73.41%_16.84%_21.74%] leading-[normal] text-[#4b5560] text-[13px] text-center"
            data-node-id="64:817"
          >
            생기 있는 코랄 립
          </p>
        </div>
        <div
          className="absolute contents inset-[71.69%_51.09%_16.43%_33.8%]"
          data-node-id="64:818"
          data-name="Group"
        >
          <div
            className="absolute inset-[71.69%_51.09%_16.43%_33.8%]"
            data-node-id="64:819"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector18}
            />
          </div>
          <div
            className="absolute contents inset-[71.69%_51.09%_16.43%_33.8%]"
            data-node-id="64:820"
            data-name="Clip path group"
          >
            <div
              className="absolute inset-[72.26%_53.23%_22.56%_35.94%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-41px_-18.113px] mask-size-[290px_382.375px]"
              data-node-id="64:823"
              style={{ maskImage: `url("${imgGroup}")` }}
              data-name="Group"
            >
              <img
                alt=""
                className="absolute block inset-0 max-w-none size-full"
                src={imgGroup2}
              />
            </div>
          </div>
          <div
            className="absolute inset-[76.63%_54.64%_18.56%_37.34%]"
            data-node-id="64:827"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector16}
            />
          </div>
          <div
            className="absolute inset-[76.79%_54.9%_18.71%_37.6%]"
            data-node-id="64:828"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector17}
            />
          </div>
          <div
            className="absolute contents inset-[76.79%_54.9%_18.71%_37.6%]"
            data-node-id="64:829"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[75.91%_53.65%_18.17%_36.36%]"
              data-node-id="64:832"
              data-name="Group"
            >
              <div
                className="absolute inset-[75.91%_53.65%_18.17%_36.36%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[23.9px_28.376px] mask-size-[144px_144.9px]"
                data-node-id="64:833"
                style={{ maskImage: `url("${imgRectangle12}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle14}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[81.91%_56.3%_17.52%_39.01%] leading-[normal] text-[#10202d] text-[15px] text-center"
            data-node-id="64:834"
          >
            ROSE PETAL
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[82.66%_55.91%_16.84%_38.62%] leading-[normal] text-[#4b5560] text-[13px] text-center"
            data-node-id="64:835"
          >
            맑은 로즈 컬러 팩트
          </p>
        </div>
        <div
          className="absolute contents inset-[71.69%_33.91%_16.43%_50.99%]"
          data-node-id="64:836"
          data-name="Group"
        >
          <div
            className="absolute inset-[71.69%_33.91%_16.43%_50.99%]"
            data-node-id="64:837"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector19}
            />
          </div>
          <div
            className="absolute contents inset-[71.69%_33.91%_16.43%_50.99%]"
            data-node-id="64:838"
            data-name="Clip path group"
          >
            <div
              className="absolute inset-[73.63%_33.91%_22.74%_50.99%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-62.388px] mask-size-[290px_382.375px]"
              data-node-id="64:841"
              style={{ maskImage: `url("${imgGroup}")` }}
              data-name="Group"
            >
              <div className="absolute inset-[-0.43%_0]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgGroup3}
                />
              </div>
            </div>
          </div>
          <div
            className="absolute inset-[76.63%_37.45%_18.56%_54.53%]"
            data-node-id="64:844"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector16}
            />
          </div>
          <div
            className="absolute inset-[76.79%_37.71%_18.71%_54.79%]"
            data-node-id="64:845"
            data-name="Vector"
          >
            <img
              alt=""
              className="absolute block inset-0 max-w-none size-full"
              src={imgVector17}
            />
          </div>
          <div
            className="absolute contents inset-[76.79%_37.71%_18.71%_54.79%]"
            data-node-id="64:846"
            data-name="Clip path group"
          >
            <div
              className="absolute contents inset-[75.81%_36.57%_18.26%_53.64%]"
              data-node-id="64:849"
              data-name="Group"
            >
              <div
                className="absolute inset-[75.81%_36.57%_18.26%_53.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22.2px_31.395px] mask-size-[144px_144.9px]"
                data-node-id="64:850"
                style={{ maskImage: `url("${imgRectangle12}")` }}
                data-name="Rectangle"
              >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img
                    alt=""
                    className="absolute left-0 max-w-none size-full top-0"
                    src={imgRectangle15}
                  />
                </div>
              </div>
            </div>
          </div>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[81.91%_39.19%_17.52%_56.28%] leading-[normal] text-[#10202d] text-[15px] text-center"
            data-node-id="64:851"
          >
            SAND NUDE
          </p>
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[82.66%_38.1%_16.84%_55.18%] leading-[normal] text-[#4b5560] text-[13px] text-center"
            data-node-id="64:852"
          >
            차분한 샌드 누드 베이스
          </p>
        </div>
        <div
          className="absolute inset-[71.69%_16.72%_16.43%_68.18%]"
          data-node-id="64:853"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector20}
          />
        </div>
        <div
          className="absolute inset-[81.63%_21.93%_17.12%_75.99%]"
          data-node-id="64:854"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector21}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[73.63%_20.42%_25.09%_69.64%] leading-[normal] text-[34px] text-white"
          data-node-id="64:855"
        >
          SKIN FIRST,
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[75.01%_19.06%_23.71%_69.64%] leading-[normal] text-[#c7a667] text-[34px]"
          data-node-id="64:856"
        >
          COLOR NEXT.
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[76.88%_22.66%_22.52%_69.64%] leading-[normal] text-[16px] text-white"
          data-node-id="64:857"
        >
          피부 결을 먼저 다듬고,
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[77.57%_25.31%_21.84%_69.64%] leading-[normal] text-[16px] text-white"
          data-node-id="64:858"
        >
          컬러는 가볍게.
        </p>
        <div
          className="absolute inset-[84.91%_16.72%_10.4%_16.61%]"
          data-node-id="64:859"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector22}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[86.29%_73.54%_12.81%_18.7%] leading-[normal] text-[#10202d] text-[24px]"
          data-node-id="64:860"
        >
          내 피부 톤 찾기
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[87.41%_69.58%_11.9%_18.7%] leading-[normal] text-[#7b8591] text-[18px]"
          data-node-id="64:861"
        >
          쿠션 · 파운데이션 호수 가이드
        </p>
        <div
          className="absolute inset-[86.1%_59.01%_12.15%_38.07%]"
          data-node-id="64:862"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector23}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[88.38%_59.77%_11.12%_38.83%] leading-[normal] text-[#7b8591] text-[13px] text-center"
          data-node-id="64:863"
        >
          13호
        </p>
        <div
          className="absolute inset-[86.1%_53.8%_12.15%_43.28%]"
          data-node-id="64:864"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector24}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[88.38%_54.56%_11.12%_44.04%] leading-[normal] text-[#7b8591] text-[13px] text-center"
          data-node-id="64:865"
        >
          17호
        </p>
        <div
          className="absolute inset-[86.1%_48.59%_12.15%_48.49%]"
          data-node-id="64:866"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector25}
          />
        </div>
        <div
          className="absolute inset-[85.91%_48.28%_11.96%_48.18%]"
          data-node-id="64:867"
          data-name="Vector"
        >
          <div className="absolute inset-[-1.46%_-1.47%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector26}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[88.38%_49.32%_11.12%_49.22%] leading-[normal] text-[#10202d] text-[13px] text-center"
          data-node-id="64:868"
        >
          21호
        </p>
        <div
          className="absolute inset-[86.1%_43.39%_12.15%_53.7%]"
          data-node-id="64:869"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector27}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[88.38%_44.14%_11.12%_54.45%] leading-[normal] text-[#7b8591] text-[13px] text-center"
          data-node-id="64:870"
        >
          23호
        </p>
        <div
          className="absolute inset-[86.1%_38.18%_12.15%_58.91%]"
          data-node-id="64:871"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector28}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[88.38%_38.93%_11.12%_59.66%] leading-[normal] text-[#7b8591] text-[13px] text-center"
          data-node-id="64:872"
        >
          25호
        </p>
        <div
          className="absolute inset-[86.1%_32.97%_12.15%_64.11%]"
          data-node-id="64:873"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector29}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[88.38%_33.72%_11.12%_64.87%] leading-[normal] text-[#7b8591] text-[13px] text-center"
          data-node-id="64:874"
        >
          27호
        </p>
        <div
          className="absolute inset-[89.85%_0_-0.16%_0]"
          data-node-id="64:875"
          data-name="Vector"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgVector30}
          />
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[91.13%_76.77%_8.25%_16.67%] leading-[normal] text-[17px] text-white whitespace-nowrap"
          data-node-id="64:876"
        >
          개인정보처리방침
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[91.21%_72.19%_8.23%_24.9%] leading-[normal] text-[#c4ccd4] text-[15px] whitespace-nowrap"
          data-node-id="64:877"
        >
          이용약관
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[91.21%_66.72%_8.23%_29.48%] leading-[normal] text-[#c4ccd4] text-[15px] whitespace-nowrap"
          data-node-id="64:878"
        >
          상품권 안내
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[91.21%_62.14%_8.23%_34.95%] leading-[normal] text-[#c4ccd4] text-[15px] whitespace-nowrap"
          data-node-id="64:879"
        >
          기업소개
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[91.21%_57.55%_8.23%_39.53%] leading-[normal] text-[#c4ccd4] text-[15px] whitespace-nowrap"
          data-node-id="64:880"
        >
          인재채용
        </p>
        <div
          className="absolute inset-[91.2%_16.67%_7.99%_79.69%]"
          data-node-id="64:881"
          data-name="Group"
        >
          <div className="absolute inset-[-2.87%_-1.07%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgGroup4}
            />
          </div>
        </div>
        <div
          className="absolute inset-[92.77%_16.67%_7.23%_16.67%]"
          data-node-id="64:887"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.5px_0]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector31}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[93.73%_78.54%_5.53%_16.67%] leading-[normal] text-[20px] text-white whitespace-nowrap"
          data-node-id="64:888"
        >
          한국화장품
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[94.84%_60.42%_4.57%_16.67%] leading-[normal] text-[#c4ccd4] text-[16px] whitespace-nowrap"
          data-node-id="64:889"
        >
          한국화장품 (주) | 대표이사: OOO | 사업자등록번호: 000-00-00000
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[95.74%_56.88%_3.67%_16.67%] leading-[normal] text-[#c4ccd4] text-[16px] whitespace-nowrap"
          data-node-id="64:890"
        >
          주소: 서울특별시 종로구 청계천로 XX | 통신판매업신고:
          2026-서울종로-XXXX
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[96.65%_64.64%_2.76%_16.67%] leading-[normal] text-[#c4ccd4] text-[16px] whitespace-nowrap"
          data-node-id="64:891"
        >
          개인정보보호책임자: OOO | 이메일: cs@ihkcos.co.kr
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[97.55%_56.2%_1.86%_16.67%] leading-[normal] text-[#c4ccd4] text-[16px] whitespace-nowrap"
          data-node-id="64:892"
        >
          COPYRIGHT © HANKOOK COSMETICS CO., LTD. ALL RIGHTS RESERVED.
        </p>
        <div
          className="absolute inset-[93.65%_16.69%_3.7%_71.33%]"
          data-node-id="64:893"
          data-name="Vector"
        >
          <div className="absolute inset-[-0.58%_-0.22%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector32}
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[94.41%_18.91%_5.03%_73.54%] leading-[normal] text-[#c4ccd4] text-[15px] text-center whitespace-nowrap"
          data-node-id="64:894"
        >
          웹접근성 품질인증 마크
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[95.16%_19.71%_4.28%_74.24%] leading-[normal] text-[#c7a667] text-[15px] text-center whitespace-nowrap"
          data-node-id="64:895"
        >
          WA 인증 획득 예정
        </p>
        <div
          className="absolute flex inset-[20.25%_75.47%_79.5%_24.32%] items-center justify-center"
          data-node-id="64:896"
          style={{ containerType: "size" }}
        >
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-18.75%_-9.32%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgVector33}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute flex inset-[20.25%_81.82%_79.5%_17.97%] items-center justify-center"
          data-node-id="64:897"
          style={{ containerType: "size" }}
        >
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-18.75%_-9.32%]">
                <img
                  alt=""
                  className="block max-w-none size-full"
                  src={imgVector33}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-[#10202d] border-[#10202d] border-[1.5px] border-solid content-stretch flex h-[36px] items-center justify-center left-[499px] min-h-[36px] min-w-[96px] overflow-clip rounded-[4px] top-[698px] w-[96px]"
          data-node-id="64:898"
          data-name="Product Tab"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_KR:Medium'] font-medium leading-[26px] relative shrink-0 text-[16px] text-white whitespace-nowrap"
            data-node-id="I64:898;1:263"
          >
            전체
          </p>
        </div>
        <SkinConcernChip
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[36px] items-center justify-center left-[calc(20%+223px)] overflow-clip rounded-[4px] top-[698px] w-[75px]"
          label="베이스"
        />
        <SkinConcernChip
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[36px] items-center justify-center left-[calc(20%+306px)] overflow-clip rounded-[4px] top-[698px] w-[80px]"
          label="쿠션"
        />
        <SkinConcernChip
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[36px] items-center justify-center left-[calc(20%+395px)] overflow-clip rounded-[4px] top-[698px] w-[100px]"
          label="파운데이션"
        />
        <SkinConcernChip
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[36px] items-center justify-center left-[calc(40%+120px)] overflow-clip rounded-[4px] top-[698px] w-[180px]"
          label="파우더/트윈케이크/팩트"
        />
        <SkinConcernChip
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[36px] items-center justify-center left-[calc(40%+308px)] overflow-clip rounded-[4px] top-[698px] w-[50px]"
          label="립"
        />
        <button
          className="absolute bg-white border-[#cfd3d9] border-[1.5px] border-solid content-stretch cursor-pointer flex h-[51px] items-center justify-center left-[calc(20%+396px)] overflow-clip rounded-[4px] top-[2054px] w-[359px]"
          data-node-id="64:904"
          data-name="Skin Concern Chip"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_KR:Bold'] font-bold leading-[normal] relative shrink-0 text-[#10202d] text-[15px] text-left whitespace-nowrap"
            data-node-id="I64:904;1:268"
          >
            메이크업 상품 더보기 +
          </p>
        </button>
        <button
          className="absolute bg-white border border-[#10202d] border-solid content-stretch cursor-pointer flex h-[49px] items-center justify-center left-[calc(80%-168px)] overflow-clip rounded-[4px] top-[2783px] w-[209px]"
          data-node-id="64:905"
          data-name="Skin Concern Chip"
        >
          <p
            className="[word-break:break-word] font-['Noto_Sans_KR:Bold'] font-bold leading-[normal] relative shrink-0 text-[#0d1a24] text-[14px] text-left whitespace-nowrap"
            data-node-id="I64:905;1:268"
          >
            내 호수 확인하기 →
          </p>
        </button>
        <div
          className="absolute h-[157.97px] left-[calc(80%-80.5px)] top-[2521.38px] w-[143.5px]"
          data-node-id="64:906"
          data-name="Subtract"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgSubtract}
          />
        </div>
        <div
          className="absolute h-[118.588px] left-[calc(80%-45px)] top-[2548.05px] w-[107.626px]"
          data-node-id="64:911"
          data-name="Subtract"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={imgSubtract1}
          />
        </div>
        <div
          className="absolute h-[16px] left-[calc(60%+187px)] top-[2543px] w-[91px]"
          data-node-id="64:916"
          data-name="다시 진단하기 →"
        >
          <p
            className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[0_-75.82%_-18.75%_0] leading-[normal] text-[#c7a667] text-[16px] whitespace-nowrap"
            data-node-id="I64:916;231:506"
          >
            메이크업 가이드 보기 →
          </p>
        </div>
        <div
          className="absolute h-[500px] left-px top-[101px] w-[1920px]"
          data-node-id="64:917"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute h-[155.42%] left-0 max-w-none top-[-25.33%] w-[99.99%]"
              src={imgRectangle16}
            />
          </div>
        </div>
        <div
          className="absolute contents inset-[4.82%_37.81%_84.98%_49.53%]"
          data-node-id="64:918"
          data-name="Clip path group"
        >
          <div
            className="absolute contents inset-[4.82%_37.81%_84.98%_49.53%]"
            data-node-id="64:919"
            data-name="Group"
          >
            <div
              className="absolute inset-[4.82%_37.81%_84.98%_49.53%]"
              data-node-id="64:920"
              data-name="Rectangle"
            />
          </div>
        </div>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[5.25%_68.28%_93.62%_16.61%] leading-[normal] text-[#a88445] text-[13px]"
          data-node-id="64:921"
        >
          2026 MAKE-UP COLLECTION
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Bold'] font-bold inset-[6.31%_54.53%_92.13%_16.61%] leading-[normal] text-[#10202d] text-[42px]"
          data-node-id="64:922"
        >
          피부 위에 피어나는, 나만의 컬러
        </p>
        <p
          className="[word-break:break-word] absolute font-['Noto_Sans_KR:Regular'] font-normal inset-[8.28%_64.58%_91.13%_16.61%] leading-[normal] text-[#5b6670] text-[16px]"
          data-node-id="64:923"
        >
          베이스부터 립까지, 명휘 · 오션 · 효움 메이크업 컬렉션
        </p>
        <ProductTab
          className="absolute bg-[#10202d] border-[#10202d] border-[1.5px] border-solid content-stretch flex h-[44px] items-center justify-center left-[319px] min-w-[96px] overflow-clip rounded-[4px] top-[307px] w-[200px]"
          label="컬렉션 보기 → "
        />
      </div>
    </div>
  )
}
