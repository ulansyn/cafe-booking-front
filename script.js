/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок в админ панели
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Убираем активные классы
            tabButtons.forEach(button => button.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Добавляем активный класс к выбранной кнопке и соответствующему блоку
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            const activePane = document.getElementById(tabId);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // Пример выбора столика на странице бронирования
    const tables = document.querySelectorAll('.table');
    tables.forEach(table => {
        table.addEventListener('click', function() {
            tables.forEach(t => t.classList.remove('selected'));
            table.classList.add('selected');
            console.log('Выбран столик: ', table.getAttribute('data-table'));
        });
    });

    // Обработчик для всех форм (демо-версия)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Форма отправлена (демо)');
        });
    });
});
