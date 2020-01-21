        function ge(a) {
         return document.getElementById(a);
        }
        
        function tckimlikkontorolu(tcno) {
         var tckontrol, toplam;
         tckontrol = tcno;
         tcno = tcno.value;
         /* 
         @İşlem:Kontrol 1
         @Açıklama:ilk 10 basamaktaki rakamın toplamının birler basamağını bul ve 11 inci basamaktaki sayıya eşit mi kontrol et
         */
         toplam = Number(tcno.substring(0, 1)) + Number(tcno.substring(1, 2)) + Number(tcno.substring(2, 3)) + Number(tcno.substring(3, 4)) + Number(tcno.substring(4, 5)) + Number(tcno.substring(5, 6)) + Number(tcno.substring(6, 7)) + Number(tcno.substring(7, 8)) + Number(tcno.substring(8, 9)) + Number(tcno.substring(9, 10));
        
         strtoplam = String(toplam);
        
         kontrol1 = strtoplam.substring(strtoplam.length, strtoplam.length - 1);
        
         /* 
        @İşlem:Kontrol 2
        @Açıklama: 1-3-5-7-9 basamaklarındaki sayıların toplamının 7 katı ile 2-4-6-8 basamklarındaki sayıların toplamının 9 katının toplamının birler basamağı 10 uncu basamaktaki sayıya eşit mi kontrol et
        */
         toplam2 = ((Number(tcno.substring(0, 1)) + Number(tcno.substring(2, 3)) + Number(tcno.substring(4, 5)) + Number(tcno.substring(6, 7)) + Number(tcno.substring(8, 9))) * 7 + (Number(tcno.substring(1, 2)) + Number(tcno.substring(3, 4)) + Number(tcno.substring(5, 6)) + Number(tcno.substring(7, 8))) * 9);
        
         strtoplam2 = String(toplam2);
        
         kontrol2 = strtoplam2.substring(strtoplam2.length, strtoplam2.length - 1);
        
         /* 
        @İşlem:Kontrol 3
        @Açıklama: 1-3-5-7-9 basamaklarındaki sayıların toplamının 8 katının birler basamağı 11 inci basamaktaki sayıya eşit mi kontrol et
        */
         toplam3 = (Number(tcno.substring(0, 1)) + Number(tcno.substring(2, 3)) + Number(tcno.substring(4, 5)) + Number(tcno.substring(6, 7)) + Number(tcno.substring(8, 9))) * 8;
        
         strtoplam3 = String(toplam3);
        
         kontrol3 = strtoplam3.substring(strtoplam3.length, strtoplam3.length - 1);
        
         /* 
        @İşlem:Kontrol 4
        @Açıklama: 11 inci basamaktaki sayı çift sayı mı kontrol et
        @Ek Açıklama: Normal şartlarda yukarıdaki kontrolleri yaparak bu kontrolü yapmamıza gerek yok. Ancak yinede bunuda eklememizde bir sakınca yok. Zaten yukarıda yapılan kontroller son sayının mecburen çift sayı olmasını sağlıyor.
        */
         //kontrol4 -> 11 inci basamak %2===0
         if (kontrol1 === Number(tcno.substring(10, 11)) && kontrol2 === Number(tcno.substring(9, 10)) && Number(tcno.substring(10, 11)) && Number(tcno.substring(10, 11)) % 2 === 0) {
          var sonuc = ge("sonuc");
          sonuc.className = "dogru";
          sonuc.innerHTML = "Doğru";
         } else {
          var sonuc = ge("sonuc");
          sonuc.className = "yanlis";
          sonuc.innerHTML = "Yanlış";
        
         }
        
        
        }
