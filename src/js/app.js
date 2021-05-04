import OnlineReportWidget from './OnlineReportWidget';


const report = new OnlineReportWidget('http://localhost:7070/');
report.bindToDOM(document.querySelector('#online_report_widget_container'));
report.init();
