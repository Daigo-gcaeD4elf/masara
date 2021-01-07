// オーキド博士のメッセージを非表示にする
let ohkido = document.getElementsByClassName('ohkido');
for (let i = 0; i < ohkido.length; i++) {
    ohkido[i].style.display = 'none';
}

class SelectPokemon {

    constructor(obj) {

        let poke    = document.getElementById(obj.poke);
        let pokemon = document.getElementById(obj.pokemon);
        let gosanke = document.getElementsByClassName('gosanke');

        let yes = document.getElementById(`yes_${obj.poke}`)
        let no  = document.getElementById(`no_${obj.poke}`)

        let letsGo = document.getElementById('letsGo');

        // ポケモン名ボタンクリック
        poke.addEventListener('click', () => {
            // オーキド博士のメッセージと「はい」「いいえ」を表示
            pokemon.style.display = 'block';

            // ポケモン名ボタンを非活性に
            for (let i = 0; i < gosanke.length; i++) {
                gosanke[i].setAttribute('disabled', true);
            }
        });

        // 「はい」選択時
        yes.addEventListener('click', () => {
            // 「はい」「いいえ」ボタンを非活性に
            yes.setAttribute('disabled', true);
            no.setAttribute('disabled', true);

            // メッセージ表示
            letsGo.innerHTML = `${obj.pokemonName}！！ キミにきめた！！`;
        });

        // 「いいえ」選択時
        no.addEventListener('click', () => {
            // オーキド博士のメッセージと「はい」「いいえ」を非表示
            pokemon.style.display = 'none';
            for (let i = 0; i < gosanke.length; i++) {
                gosanke[i].removeAttribute('disabled');
            }
        });
    }
}

let fushigidane = new SelectPokemon ({
    poke: 'dane',
    pokemon: 'fushigidane',
    pokemonName: 'フシギダネ',
});

let hitokage = new SelectPokemon ({
    poke: 'kage',
    pokemon: 'hitokage',
    pokemonName: 'ヒトカゲ',
});

let zenigame = new SelectPokemon ({
    poke: 'zeni',
    pokemon: 'zenigame',
    pokemonName: 'ゼニガメ',
});
