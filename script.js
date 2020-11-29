// 1. 事件綁定: click
// 2. 函式宣告: submitForm
// 3. 取得三個欄位的資料並組成 object
// 4. 使用 fetch 發送 POST request
// 5. 將 response 用彈跳視窗顯示給使用者

// 這個 URL 代表後端的地址
const url = "https://script.google.com/macros/s/AKfycbya02ozyH2KJrzR4dZftP1WrWyfv6-rjWWMJgqN7CzI_u4w9C6d/exec";

function submitForm() {
	// 將三筆資料組合成物件(object)，放在一個變數裡面
	const form = {
		name: document.querySelector("#name").value,
		email: document.querySelector("#email").value,
		content: document.querySelector("#content").value
	};

	// 使用 fetch
	// 第一個參數放後端網址
	// 第二個參數可以放一個物件(object)，裡面可以指定網路請求為 POST，並且將 form 參數轉成字串後，放到 body 裡面
	fetch(url, {
		method: 'POST',
		body: JSON.stringify(form)
	})
		.then(function(response) {
			return response.json();
		})
		.then(function(jsonData) {
			alert(jsonData);
		});
};

document.querySelector("#submit").addEventListener("click", submitForm); // 綁定送出按鈕點擊事件