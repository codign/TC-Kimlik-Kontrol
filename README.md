# TC-Kimlik-Kontrol
T.C. kimlik numarasını geliştirme algoritması temelinde kontrol ediyor... Demo: https://codign.github.io/TC-Kimlik-Kontrol/index.html

Fatih Hayrioğlu'nun 2007 yılında paylaştığı [Javascript ile TC kimlik no doğrulama](https://fatihhayrioglu.com/javascript-ile-tc-kimlik-no-dogrulama/) adlı içeriğe denk geldim. Kullanmadan önce yorumları okuduğumda yetersiz kaldığını gördüm. Hazırcılığımı bırakıp bazı noktalarda düzenleme yapmak istedim... Çalışsın yeter!
Wikipedia da yer alan [T.C. Kimlik Numarası](https://tr.wikipedia.org/wiki/T.C._Kimlik_Numaras%C4%B1) başlıklı yazıdan T.C. kimlik numarasının özellikleri öğrendim. İlk linkteki içeriği tcvalid.js dosyası gibi güncelledim...
Umarım ihtiyaçlarınızı karşılar.

T.C. kimlik no algoritması çerçevesinde ilerleyen zamanlarda doğum tarihi, kardeş sayısı, abi-abla-kardeş kontrol seçenekleriyle dahada artırabiliriz. Wikipedia makalesinde görmediğim bir kısım. Kimlik numarasının ilk 9 hanesine *29999* ekleyerek daha büyük aile bireylerinin numarasının ilk 9 hanesine, *29999* çıkararak daha küçük aile bireylerinin numarasının ilk 9 hanesine ulaşıyoruz. Kullanıcıdan abi-abla-kardeş gibi bilgilerle teyit işlemi gerçekleştirilebilir... Nüfus müdürlüğünün https://tckimlik.nvi.gov.tr/service/kpspublic.asmx?op=TCKimlikNoDogrula adresinde ki SOAP servisinden yararlanmadan bu şekilde basit bir işlev sunabiliriz. Daha kapsamlı doğrulama istiyorsak SOAP servisini kullanmayı denebilirsiniz. 
