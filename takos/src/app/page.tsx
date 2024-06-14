import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { SiDeno } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiHellofresh } from "react-icons/si";
import Talk from "./talk.png";
import Img from "next/image";

const checked = <FaCheck className="mx-auto" color="#00ff7f" />;
const unchecked = <RxCross2 className="mx-auto" color="#ff0000" size={36}/>;

export default function Home() {
  return (
    <div className="root w-svw bg-custom-gradient">
      <header className="p-2 flex fixed top-0 w-full left-0 mb-4 bg-[#1a1a1a91]">
        <div className="w-full mx-4 flex">
          <h1 className="text-3xl w-1/3 pl-5 text-white p-1.5">🐙Tako's</h1>
          <div className="w-2/3 flex justify-end pr-5">
            <ul className="flex p-1.5 rounded-full">
              <li className="text-2xl text-white px-2">
                <a href="/">Home</a>
              </li>
              <li className="text-2xl text-white px-2">
                <a href="/about">About</a>
              </li>
              <li className="text-2xl text-white px-2">
                <a href="/contact">SNS</a>
              </li>
            </ul>
        </div>
        </div>
        </header>
      <section className="pt-2 h-lvh py-8">
        <div className="w-full pt-4">
          <h2 className="text-10xl text-white text-center py-40"><b>Tako's</b></h2>
          <p className="text-center text-white text-3xl">Next Generation Decentralized Chat Service</p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 mx-2 rounded-lg">
        <div className="my-8 py-4 pb-8 mx-4">
          <h2 className="text-7xl text-center py-12"><b>分散型チャットでつながる世界</b></h2>
          <p className="text-center p-1 text-xl">Tako'sは日本製の分散型チャットサービス</p>
          <p className="text-center p-1 text-xl">軽量設計でプライバシーとセキュリティを重視したチャット体験を提供</p>
          <p className="text-center p-1 text-xl">日本人にとって親しみやすいUIを採用</p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-green-600 to-teal-600 mx-2 rounded-lg">
        <div className="my-8 py-4 pb-8 mx-4">
          <h2 className="text-7xl text-center py-12"><b>紹介</b></h2>
          <div className="flex pb-8">
            <Img src={Talk} alt="talk" className="mx-auto" width={600} height={600}/>
            <div className="w-1/2 p-16">
              <p className="text-4xl py-4"><b>日本人にとって親しみやすいUIを提供</b></p>
              <p className="text-2xl py-2">シンプルで使いやすいデザインにより、初心者から上級者まで幅広いユーザーに対応</p>
              <p className="text-2xl py-2">無駄な機能を排除し、ストレスなくチャットを楽しむことが可能</p>
            </div>
          </div>
          <div className="flex pb-8">
            <div className="w-1/2 p-16">
              <p className="text-4xl py-4"><b>カスタマイズ性の高いグループチャット</b></p>
              <p className="text-2xl py-2">tako'sでは、グループチャットを自由にカスタマイズすることが可能</p>
              <p className="text-2xl py-2">メンバーの追加や削除、権限の設定など、さまざまな機能を使ってチャットを管理</p>
            </div>
            <Img src={Talk} alt="talk" className="mx-auto" width={600} height={600}/>
          </div>
        </div>
      </section>
      <section className="pb-8 bg-gradient-to-r from-red-600 to-yellow-700 rounded-lg mx-2 mb-6">
        <div className="w-full rounded-lg py-4 pb-12 pb-4">
          <h2 className="text-7xl text-center py-12"><b>機能</b></h2>
          <p className="text-center p-1 text-xl">オープンソースのプロジェクトであり、コミュニティによる自由なカスタマイズや拡張が可能です</p>
          <p className="text-center p-1 text-xl pb-12">※本ページの内容はv1.0で実装予定の機能</p>
            <div className="flex w-full p-2">
              <div className="w-1/3 p-3 mr-2 ml-2 bg-white bg-opacity-10 shadow-lg h-1/4 rounded">
                <p className="text-2xl text-center text-2xl">高速なUI</p>
                <p className="text-sm text-center pt-3">islandsアーキテクチャを採用したFreshを使用することで高速なUIを実現</p>
              </div>
              <div className="w-1/3 p-3 mr-2 ml-2 bg-white bg-opacity-10 shadow-lg h-1/4 rounded">
                <p className="text-2xl text-center">非中央集権</p>
                <p className="text-sm text-center pt-3">あなたのデータはあなたのサーバーに保存されるため、プライバシーとセキュリティを保護</p>
              </div>
              <div className="w-1/3 p-3 mr-2 ml-2 bg-white bg-opacity-10 shadow-lg h-1/4 rounded">
                <p className="text-2xl text-center">トークデータの暗号化</p>
                <p className="text-sm text-center pt-3">トークデータは暗号化されて保存されるため、安全なチャットを楽しむことができます。</p>
              </div>
            </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-violet-500 to-pink-600 py-8 rounded-lg mx-2 mb-6">
        <div className="w-full py-4 pb-12 px-4">
          <h2 className="text-7xl text-center py-12"><b>他社サービスとの比較</b></h2>
          <table className="w-full  bg-gradient-to-r from-violet-600 to-pink-700 rounded-lg">
            <tr className="text-center">
              <td className="text-3xl p-4"><b>Feature</b></td>
              <td className="text-3xl p-4"><b>Takos</b></td>
              <td className="text-3xl p-4"><b>LINE</b></td>
              <td className="text-3xl p-4"><b>Discord</b></td>
            </tr>
            <tr className="text-center">
              <td className="text-2xl p-4">チャット機能</td>
              <td className="text-2xl p-4 text-center">{checked}</td>
              <td className="text-2xl p-4 text-center">{checked}</td>
              <td className="text-2xl p-4 text-center">{checked}</td>
            </tr>
            <tr className="text-center">
              <td className="text-2xl p-4">原則一人一アカウント</td>
              <td className="text-2xl p-4">{unchecked}</td>
              <td className="text-2xl p-4">{checked}</td>
              <td className="text-2xl p-4">{unchecked}</td>
            </tr>
            <tr className="text-center">
              <td className="text-2xl p-4">WEBサービス</td>
              <td className="text-2xl p-4">{checked}</td>
              <td className="text-2xl p-4">{unchecked}</td>
              <td className="text-2xl p-4">{checked}</td>
            </tr>
            <tr className="text-center">
              <td className="text-2xl p-4">分散型サービス</td>
              <td className="text-2xl p-4">{checked}</td>
              <td className="text-2xl p-4">{unchecked}</td>
              <td className="text-2xl p-4">{unchecked}</td>
            </tr>
            <tr className="text-center">
              <td className="text-2xl p-4">高度なグループサービス</td>
              <td className="text-2xl p-4">{checked}</td>
              <td className="text-2xl p-4">{unchecked}</td>
              <td className="text-2xl p-4">{checked}</td>
            </tr>
          </table>
        </div>
      </section>
      <section className="bg-gradient-to-r from-green-700 to-emerald-600 py-8 rounded-lg mx-2 mb-6">
        <div className="w-full py-4 pb-12 px-4">
          <h2 className="text-7xl text-center py-12"><b>仕様技術</b></h2>
          <div className="w-full flex">
            <div className="w-1/3 p-4">
              <SiDeno className="mx-auto" size={64} color="#000000"/>
              <p className="text-3xl py-4 text-center">Deno</p>
              <p className="text-center pb-1 text-xl">Denoは、V8エンジンとRustによって構築された新しいランタイム</p>
              <p className="text-center pb-1 text-xl">Node.jsよりも安全で高速な実行環境を提供</p>
            </div>
            <div className="w-1/3 p-4">
              <SiMongodb className="mx-auto" size={64} color="#adff2f"/>
              <p className="text-3xl py-4 text-center">MongoDB</p>
              <p className="text-center pb-1 text-xl">MongoDBのためのモデリングツールとしてmongoose、高速なキャッシュストアとしてredisを採用</p>
              <p className="text-center pb-1 text-xl">高速かつ安全なデータベースを実現</p>
            </div>
            <div className="w-1/3 p-4">
              <SiHellofresh className="mx-auto" size={64} color="#ffff00"/>
              <p className="text-3xl py-4 text-center">Fresh</p>
              <p className="text-center pb-1 text-xl">高速なUIを提供する新しいフロントエンドフレームワーク</p>
              <p className="text-center pb-1 text-xl">効率的な開発、カスタマイズが可能</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-r from-green-700 to-green-500 p-2 bottom-0 left-0 w-full">
        <div className="w-full flex">
          <div className="w-1/3 p-6">
            <p className="text-center text-3xl">🐙Takos</p>
          </div>
          <div className="w-2/3 p-6  rounded-lg">
            <ul className="">
              <li className="text-xl p-1">
                <a href="/">Contact</a>
              </li>
              <li className="text-xl p-1">
                <a href="/about">About</a>
              </li>
              <li className="text-xl p-1">
                <a href="/contact">SNS</a>
              </li>
              <li className="text-xl p-1">
                <a href="/contact">会社概要</a>
              </li>
              <li className="text-xl p-1">
                <a href="/contact">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-white">©2024 Tako's || developed by takoserver and Aranpect</p>
      </footer>
    </div>
  );
}
