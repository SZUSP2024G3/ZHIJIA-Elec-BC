
document.getElementById('saveContact').addEventListener('click', function() {
  const vCardContent = `
BEGIN:VCARD
VERSION:3.0
N:李;锋
FN:锋 李
ORG:至佳科技
TITLE:CEO
ADR:;;南山区粤海街道高新区社区粤兴三道6号南大产学研大厦A区A307;深圳市;;;
TEL;TYPE=CELL;VOICE:13760376561
EMAIL;WORK;INTERNET:alexlf@chbml.com
END:VCARD
`;

  // 创建并下载 vCard 文件
  const blob = new Blob([vCardContent], { type: 'text/vcard' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = '李锋.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});