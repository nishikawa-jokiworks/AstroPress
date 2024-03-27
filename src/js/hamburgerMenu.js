//ハンバーガーメニューを複数（上下）に付けたい場合もあるのでこのようにしてます。
const Humburger = document.querySelectorAll('.hamburger');
Humburger.forEach(function (e){
    e.addEventListener('click',() =>{
        //console.log('click!');
        e.classList.toggle('open');
        if(e.classList.contains('open')){
            //console.log('open');
            document.querySelectorAll('.hamburger .top').forEach(function(e){
                e.classList.add('transform','rotate-45','top-2','w-7','transition','duration-300');
                e.classList.remove('top-0','w-6');
            });
            document.querySelectorAll('.hamburger .middle').forEach(function(e){
                e.classList.add('hidden');
            })
            document.querySelectorAll('.hamburger .bottom').forEach(function(e){
                e.classList.add('transform','-rotate-45','top-2','w-7','transition','duration-300');
                e.classList.remove('top-4','w-6');
            })
            document.getElementById('slide-menu-bar').classList.add('block','translate-x-0');
            document.getElementById('slide-menu-bar').classList.remove('-translate-x-full');

        }else{
            //console.log('close');
            document.querySelectorAll('.hamburger .top').forEach(function(e){
                e.classList.remove('transform','rotate-45','top-2','transition','duration-300','top-2','w-7');
                e.classList.add('top-0','w-6');
            })
            document.querySelectorAll('.hamburger .middle').forEach(function(e){
                e.classList.remove('hidden');
            })
            document.querySelectorAll('.hamburger .bottom').forEach(function(e){
                e.classList.remove('transform','-rotate-45','top-2','w-7','transition','duration-300');
                e.classList.add('top-4','w-6');
            })
            document.getElementById('slide-menu-bar').classList.remove('block','translate-x-0');
            document.getElementById('slide-menu-bar').classList.add('-translate-x-full');

        }
    })
});