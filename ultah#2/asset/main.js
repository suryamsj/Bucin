/* 
Nama project : Ultah V2
Dibuat oleh : Muhammad Surya Jayadiprana as OCHI
Pesan : Jangan diperjual belikan, karena ini adalah project gratis
*/

$(document).ready(function () {
    // Waktu
    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    // Variabel Tampil Waktu
    const hari_ = $("#hari");
    const jam_ = $("#jam");
    const menit_ = $("#menit");
    const detik_ = $("#detik");

    // Tanggal dan Waktu
    let ultah = "Apr 12, 2022 00:00:00";
    let hitungMundur = new Date(ultah).getTime();
    let x = setInterval(function () {
        let sekarang = new Date().getTime();
        jarak = hitungMundur - sekarang;

        // Tampil hari jam menit detik
        hari_.text(Math.floor(jarak / (hari)));
        jam_.text(Math.floor((jarak % (hari)) / (jam)));
        menit_.text(Math.floor((jarak % (jam)) / (menit)));
        detik_.text(Math.floor((jarak % (menit)) / detik));

        // Kalo waktunya pas
        if (jarak < 0) {
            $("#container").addClass("tampil");
            $("#birthday").removeClass("tampil");
            $.playSound('asset/musik/masakk.mp3');
            $("#waktu").remove();
            $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', 'asset/style.css'));
            $('.start').click(function () {
                $('.stage1').fadeOut();
                fire_modal('asset/img/cake_modal.png', 'Mari buat kue ulang tahun mu!', 'Karena ini ulang tahunmu, pas kalau kamu buat kue ulang tahun secara digital sendiri. Untuk membuat kuenya, mulai dari mengaduk adonan kue yang kamu buat, panggang didalam oven dan terakhir silahkan kamu hias sesuai kemauan kamu. Sebelumnya selamat ulang tahun semoga kamu suka sama hadiahnya!');
            })

            progress = 1;

            $('.modal_content button').click(function () {
                progress++;
                close_modal(progress)
            })

            function close_modal(callback) {
                modal.css('transform', 'translateY(-50%) scale(0)')
                setTimeout(function () {
                    $('.stage' + callback).fadeIn();
                }, 600)
            }


            function fire_modal(imgurl, title, content) {

                modal = $('.birthday_inner__modal');
                modal.find('h1').html(title);
                modal.find('img').attr('src', imgurl);
                modal.find('p').html(content);
                setTimeout(function () {
                    modal.css('transform', 'translateY(-50%) scale(1)')
                }, 1000)


            }


            mixing = false;
            mixtimes = 0;

            $('.mixer').click(function () {
                if (mixing == false) {
                    mixing = true
                    mixtimes++;
                    $('.mix_spoon img').addClass('move')
                    setTimeout(function () {
                        $('.mix_spoon img').removeClass('move')
                        mixing = false;
                    }, 1000)
                }
                if (mixtimes == 6) {
                    $('.stage2').fadeOut();
                    fire_modal('asset/img/mix_modal.png', 'Adonan sudah merata!', 'Selamat, adonannya sudah merata! Sekarang mari ketahap pembuatan kue selanjutnya');

                }

            })

            $('.tin').draggable({
                revert: true
            })
            $(".oven").droppable({
                drop: function (event, ui) {
                    $('.stage3').fadeOut();
                    fire_modal('asset/img/oven_modal.png', 'Berhasil dipanggang!', 'Asik, kamu adalah koki yang hebat. Semuanya sudah terpanggang dengan baik dan adonannya terlihat sangat enak. Sekarang waktunya kamu menghias kue ulang tahun mu dengan menambahkan beberapa hal seperti madu, krim, coklat dll.');
                }
            })

            bases = 0;
            fillings = 0;

            $('.sponges .item_inner').click(function () {
                $('.sponges').addClass('inactive')
                $('.fillings').removeClass('inactive')
                t = $(this).attr('class').split(' ').pop();
                bases++
                if (bases < 6) {
                    add_sponge(t)
                }
            })

            $('.fillings .item_inner').click(function () {
                $('.fillings').addClass('inactive')
                $('.sponges').removeClass('inactive')
                f = $(this).attr('class').split(' ').pop();
                fillings++
                if (fillings < 7) {
                    add_filling(f)
                }
            })

            function add_sponge(t) {

                $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
                $('.sponges h5 span').html(bases)
            }

            $('.startagain').click(function () {
                $('.cakemake').html('<div class="base"></div>');
                bases = 0;
                fillings = 0;
                $('.sponges h5 span').html(bases)
                $('.fillings h5 span').html(fillings)
                $('.fillings').removeClass('inactive')
                $('.sponges').addClass('inactive')
            })

            function add_filling(f) {

                $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
                $('.fillings h5 span').html(fillings)
            }

            function fin() {
                $('h1,h2,.options,.startagain,.add').fadeOut();

                setTimeout(function () {
                    $('.cakemake').fadeIn()
                    $('.cakemake').animate({
                        'margin-top': '0px'
                    })
                }, 1000)
                add_candle()
                $('svg').addClass('text')
            }

            function add_candle() {
                var stages = $('.cakemake > div').length;
                var h = (stages / 2) * 41 + 22 + 'px';
                console.log(stages)
                $('.cakemake').prepend('<div class="candle" ><img src="asset/img/candle.png" /></div>')
                $('svg').show()
                setTimeout(function () {
                    $('.sa').fadeIn()
                }, 2200)
                $.stopSound();
                $.playSound('asset/musik/ultah.mp3');
                confetti.start();
            }

            $('.add').click(function () {
                fin();
            })

            $('.sa').click(function () {
                window.location.reload();
            })
            clearInterval(x);
        }
    }, 0)
});