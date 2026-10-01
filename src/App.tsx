import { useState } from 'react';

// Texte für die verschiedenen Sprachen
const content = {
  EN: {
    texts: [
      "if you're reading this, you are already participating.",
      "life feels different since we all just stare at our devices, reality is shifting, algorithms dictate our taste, routines, our worldviews.",
      "the antidote is simple, it's waking up, becoming conscious and dragging your focus back into the three dimensional realm (xyz).",
      "now look around, is there something that captured your attention, even just for a second? take a photo or record a short video.",
      "become more present, through documenting life on earth, the trash bag in the wind, cats on the street, the ocean in the morning."
    ],
    ig: "@conditio.humana.xyz"
  },
  ES: {
    texts: [
      "si estás leyendo esto, ya estás participando.",
      "la vida se siente diferente desde que todos miramos fijamente nuestros dispositivos, la realidad cambia, los algoritmos dictan nuestro gusto, rutinas y cosmovisiones.",
      "el antídoto es simple: despertar, volverse consciente y arrastrar tu foco de vuelta al reino tridimensional (xyz).",
      "ahora mira a tu alrededor, ¿hay algo que haya capturado tu atención, aunque sea por un segundo? toma una foto o graba un video corto.",
      "sé más presente, documentando la vida en la tierra, la bolsa de basura en el viento, los gatos en la calle, el océano por la mañana."
    ],
    ig: "@conditio.humana.xyz"
  },
  FR: {
    texts: [
      "si vous lisez ceci, vous participez déjà.",
      "la vie semble différente depuis que nous fixons tous nos écrans, la réalité change, les algorithmes dictent nos goûts, nos routines et nos visions du monde.",
      "l'antidote est simple : se réveiller, devenir conscient et ramener son attention dans le royaume tridimensionnel (xyz).",
      "maintenant regardez autour de vous, y a-t-il quelque chose qui a capté votre attention, même une seconde ? prenez une photo ou une courte vidéo.",
      "soyez plus présent en documentant la vie sur terre, le sac poubelle dans le vent, les chats dans la rue, l'océan le matin."
    ],
    ig: "@conditio.humana.xyz"
  },
  JP: {
    texts: [
      "これを読んでいるなら、あなたはもう参加しています。",
      "私たちがデバイスを見つめるようになってから、人生はどこか違って感じられます。現実がシフトし、アルゴリズムが私たちの好みやルーティン、世界観を支配しています。",
      "その解毒剤はシンプルです。目覚め、意識を持ち、3次元の世界（xyz）に意識を引き戻すことです。",
      "周りを見渡してみてください。ほんの一瞬でも、あなたの注意を引いたものはありますか？写真を撮るか、短い動画を記録してください。",
      "地球上の命を記録することで、より現在に存在しましょう。風の中のゴミ袋、通りの猫、朝の海。"
    ],
    ig: "@conditio.humana.xyz"
  }
};

type Lang = 'EN' | 'ES' | 'FR' | 'JP';

export default function App() {
  const [lang, setLang] = useState<Lang>('EN');
  const activeContent = content[lang];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      color: '#666666',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '40px 24px',
      boxSizing: 'box-sizing',
      maxWidth: '480px',
      margin: '0 auto'
    }}>
      {/* Sprachauswahl Oben */}
      <div style={{ display: 'flex', gap: '24px', fontSize: '15px', letterSpacing: '1px' }}>
        {(['EN', 'ES', 'FR', 'JP'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              color: '#333333',
              padding: 0,
              borderBottom: lang === l ? '1px solid #333333' : 'none',
              paddingBottom: '2px'
            }}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Mittlerer Textfluss */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', fontStyle: 'italic', fontSize: '20px', lineHeight: '1.5', textAlign: 'left', margin: '40px 0' }}>
        {activeContent.texts.map((t, idx) => (
          <p key={idx} style={{ margin: 0 }}>{t}</p>
        ))}
      </div>

      {/* Footer / Instagram Link mit Hover-Effekt */}
      <div>
        <a 
          href="https://www.instagram.com/conditio.humana.xyz?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
          target="_blank" 
          rel="noopener noreferrer"
          className="instagram-link"
          style={{
            textDecoration: 'none',
            fontSize: '18px',
            fontStyle: 'italic',
            transition: 'color 0.3s ease'
          }}
        >
          {activeContent.ig}
        </a>
        
        <style>{`
          .instagram-link {
            color: #666666;
          }
          .instagram-link:hover {
            color: #000000;
          }
        `}</style>
      </div>
    </div>
  );
}
