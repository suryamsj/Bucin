# Screenshot
![Tampilan awal](https://i.imgur.com/NT6Cv29.png)
![Popup awal](https://i.imgur.com/v01HMvx.png)
![I Lope U](https://i.imgur.com/863kTgS.png)
![Potek deh aku](https://i.imgur.com/WNvxUC9.png)

# Penting
Untuk seberasa sayang, sebenarnya tidak usah dikonfigurasi lagi kalo menurut saya sudah pas. Namun, jika menurut kalian gak pas atau gimana silahkan saja ganti. Berikut ini panduan untuk mengubah codenya. Pastikan kalian mempunyai :
- Text editor (bisa sublime/atom/notepad++/visual studio code).
- Niat

Untuk demonya, bisa [kesini](https://mainyuk.netlify.app/ "Seberapa sayang").<br>
<a href="https://trakteer.id/suryamsj/tip" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-3.jpg" height="40" style="border: 0px; height: 40px;" alt="Trakteer Saya"></a>

# Download
Untuk kalian yang tidak mempunyai text editor diatas, berikut ini link downloadnya :
- Visual Studio Code : [Visual Studio Code](https://code.visualstudio.com/download "Visual Studio Code")
- Sublime Text : [Sublime Text](https://www.sublimetext.com/3 "Sublime text")
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

Untuk gambarnya, silahkan ganti dengan gambar kalian. Untuk file gambarnya ada di **asset > img**, Tidak diganti juga gak masalah. Untuk file **index.html** cukup bagian itu saja yang diubah, sisanya tidak usah karna akan menimbulkan kerusakan pada tampilan kalau mencoba untuk mengeditnya.

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
Saat doi menjawab tidak sayang, maka akan menampilkan gambar seperti berikut :<br>
![Gambar Hati Potek](https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif)

Cukup cari tulisan seperti ini :
- imageUrl

dan ganti link [https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif](https://media.giphy.com/media/kzs3OEZTltXVSUQm7G/giphy.gif "DroidEdit") menjadi link gambar punya kalian.

### Mengganti lagu
untuk mengganti lagu, silahkan masukkan lagu yang anda punya kedalam ***asset > audio***. Setelah itu, masih didalam file ***main.js*** cari code seperti berikut :

```javascript
$.playSound('asset/audio/mine.mp3');
$.playSound('asset/audio/sakit.mp3');
```

Untuk code ini, akan memutar lagu kalau yang menjawab benar-benar **sayang**.

```javascript
$.playSound('asset/audio/mine.mp3');
```

Untuk code ini, akan memutar lagu kalau yang menjawab tidak **sayang**.

```javascript
$.playSound('asset/audio/sakit.mp3');
```

Untuk menggantinya, silahkan ganti **sakit.mp3** dan **mine.mp3** dengan file lagu kalian yang sudah dimasukkan kedalam ***asset > audio***.

# Terima kasih
Terima kasih kepada :
- SweetAlert2 : [SweetAlert2](https://github.com/sweetalert2/sweetalert2 "SweetAlert2")
- Confetti.js : [Confetti.js](https://github.com/mathusummut/confetti.js/ "Confetti.js")
- Hover.css : [Hover.css](https://github.com/IanLunn/Hover "Hover.css")
- Jquery PlaySound : [Jquery Playsound](https://github.com/admsev/jquery-play-sound "Jquery PlaySound")
