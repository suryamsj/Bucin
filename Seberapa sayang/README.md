# Penting
Untuk seberasa sayang, sebenarnya tidak usah dikonfigurasi lagi kalo menurut saya sudah pas. Namun, jika menurut kalian gak pas atau gimana silahkan saja ganti. Berikut ini panduan untuk mengubah codenya. Pastikan kalian mempunyai :
- Text editor (bisa sublime/atom/notepad++/visual studio code).
- Niat

# Download
Untuk kalian yang tidak mempunyai text editor diatas, berikut ini link downloadnya :
- Visual Studio Code : [Visual Studio Code](https://code.visualstudio.com/download "Visual Studio Code")
- Sublime Text : [Sublime Text]([htttps](https://www.sublimetext.com/3) "Sublime text")
- Atom : [Atom](https://atom.io/ "Atom")
- Notepad++ : [Notepad++](https://notepad-plus-plus.org/downloads/ "Notepad++")

Untuk yang memakai hp, bisa menggunakan ini :
- DroidEdit : [DroidEdit](https://play.google.com/store/apps/details?id=com.aor.droidedit "DroidEdit")
- anWriter : [anWriter](https://play.google.com/store/apps/details?id=com.ansm.anwriter "anWriter")
- SoloLearn : [SoloLearn](https://play.google.com/store/apps/details?id=com.sololearn "SoloLearn")

Kalau kalian sudah punya text editor, silahkan gunakan text editor yang biasa kalian pakai untuk ngoding. Text editor diatas hanya rekomendasi dari saya saja.

# Ubah

## index.html
Pada file index.html, terdapat code seperti dibawah ini

```html
<div class="wadah">
    <div class="box">
        <button class="btn btn-1 btn-1c" id="tombolPopup">Click
            Me!</button>
        <h3 id="lope" class="tulisan">
            I <img src="asset/img/love.png" /> you.
        </h3>
        <h3 id="potek" class="tulisan">
            <img src="asset/img/broken.png" /> deh aku.
        </h3>
    </div>
</div>
```

Silahkan kalian ubah dengan kata-kata kalian.

Untuk code ini, akan tampil kalau yang menjawab benar-benar **sayang**.

```html
<h3 id="lope" class="tulisan">
    I <img src="asset/img/love.png" /> you.
</h3>
```

Sementara untuk code ini, akan tampil kalau yang menjawab tidak **sayang**.

```html
<h3 id="potek" class="tulisan">
    <img src="asset/img/broken.png" /> deh aku.
</h3>
```

Untuk gambarnya, silahkan ganti dengan gambar kalian. Untuk file gamabrnya ada di **asset > img**, Tidak diganti juga gak masalah. Untuk file **index.html** cukup bagian itu saja yang diubah, sisanya tidak usah karna akan menimbulkan kerusakan pada tampilan kalau mencoba untuk mengeditnya.

## main.js

### Mengganti kata-kata
Untuk mengubah kata-kata yang muncul saat popup, silahkan ke folder **asset > js > main.js** nanti akan ketemu sebuah code yang tak perlu dipikirkan cukup cari tulisan-tulisan seperti :
- Halo Pacarku
- Aku ada pertanyaan nih buat kamu
- dll

Atau cukup cari bagian yang ditulis didalam :
- title :
- text :

### Mengganti gambar
Saat doi menjawab tidak sayang, maka akan menampilkan gambar seperti berikut :
<img src="https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif" style="postion:left" alt="Gambar hati potek"/>

Cukup cari tulisan seperti ini :
- imageUrl

dan ganti link [https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif](https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif "DroidEdit") menjadi link gambar punya kalian.
