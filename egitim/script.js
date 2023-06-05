document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle
    
    var username = document.querySelector("input[name='username']").value; // Kullanıcı adını al
    var password = document.querySelector("input[name='password']").value; // Şifreyi al
    
    // Kullanıcı adı ve şifre doğrulamasını burada yapabilirsiniz
    // Örneğin:
    if (username === "admin" && password === "12345") {
      window.location.href = "sorgu.html"; // Doğruysa sorgu.html sayfasına yönlendir
    } else {
      alert("Kullanıcı adı veya şifre hatalı!"); // Yanlışsa hata mesajı göster
    }
  });
  