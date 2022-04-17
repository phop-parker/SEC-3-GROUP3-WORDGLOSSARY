# SEC-3-GROUP3-WORDGLOSSARY

## About Application 
Word Glossary เป็น Application ที่สร้างขึ้นเพื่อใช้ในการทบทวนคำศัพท์ โดยจะสามารถสุ่มคำศัพท์จากรายการที่บันทึกลงไปได้ พร้อมทั้งสามารถเขียนความหมายของคำที่สุ่มได้เพื่อตรวจสอบความถูกต้องและทบทวนความจำ

## Application Manual
1. เมื่อเข้าสู่เว็ปไซต์ หน้าแรกจะเป็นหน้า Home หากต้องการเริ่มต้นการใช้งาน Application สามารถกดปุ่ม `Let's Add Words` เพื่อไปยังหน้า Word List และทำการป้อนคำศัพท์ได้ หรือจะกดที่แถบเมนูด้านบนก็ได้
2. เมื่อมายังหน้า Word List แล้ว จะมี form ให้ผู้ใช้เพิ่มคำศัพท์ลงไป และรายการคำศัพท์ทั้งหมดจะปรากฏในตารางด้านล่าง ผู้ใช้สามารถแก้ไขข้อมูลในตารางได้ ทำการลบคำศัพท์ที่ไม่ต้องการออกไปทีละรายการได้ หรือเลือกที่เมนู Select Multiple Word เพื่อลบทีละหลายๆรายการหรือจะลบข้อมูลทั้งหมดในตารางเลยก็ได้ 
    > &#9888; : จะมีการแจ้งเตือนและไม่สามารถเพิ่มคำศัพท์ได้หากผู้ใช้กรอกข้อมูลไม่ครบทุกช่อง
    
    > &#9888; : ไม่สามารถเพิ่มคำศัพท์ที่มีการสะกดคำเเละความหมายเหมือนเดิมซ้ำได้ (คำที่เพิ่มใหม่ต้องไม่ซ้ำกับคำที่มีอยู่แล้ว)
3. ภายในหน้า Word List ผู้ใช้สามารถ **filter** เพื่อหาคำศัพท์ด้วยคำศัพท์ หรือ ความหมายก็ได้
4. หากเราต้องการทดสอบความจำ ให้เลือกเมนู `Random` ที่แถบเมนูด้านบนเพื่อไปยังหน้า Random และทำการสุ่มคำศัพท์ ถ้าหากในตารางมีคำศัพท์แค่ 1 คำจะไม่สามารถทำการสุ่มได้ และจะมีปุ่ม `Let's Add More Words` เพื่อให้ผู้ใช้ย้อนกลับไปยังหน้า Word List เพื่อเพิ่มคำศัพท์ก่อนได้ หากมีคำศัพท์ในตารางมากกว่า 1 คำ จะปรากฎปุ่ม Random เพื่อให้ผู้ใช้ทำการสุ่มคำศัพท์
5. เมื่อกดปุ่ม Random จะทำการสุ่มคำศัพท์จากตารางให้กับผู้ใช้งาน
6. ผู้ใช้งานสามารถทบทวนความจำของตัวเองโดยการป้อนความหมายของคำศัพท์นั้น ๆ ลงไป และตรวจคำตอบได้ด้วยปุ่ม `Check`
7. หากผู้ใช้ตอบถูก จะขึ้นข้อความ ***Your answer is correct!***  มีการเก็บคะแนนเพื่อแสดงสถิติจำนวนครั้งที่ตอบถูก และผู้ใช้จะไม่สามารถกดปุ่ม `check` ได้อีกเมื่อตอบถูกแล้ว
8. หากผู้ใช้ตอบผิดเกิน 3 ครั้ง จะมีปุ่ม `Show answer` เพื่อแสดงเฉลยความหมายของคำศัพท์นั้น 
    > - ถ้าผู้ใช้กดปุ่ม `Show answer` เพื่อดูเฉลยไปแล้วจะไม่สามารถตอบได้อีก ให้กดปุ่ม Random เพื่อสุ่มคำต่อไปได้เท่านั้น
    > - ถ้าผู้ใช้ไม่กดปุ่ม `Show answer` ก็สามารถตอบใหม่ได้เรื่อยๆ จนกว่าจะตอบถูก หรือกดสุ่มคำใหม่

## จํานวนและความสามารถของแต่ละ component

#### ใช้ fetch API 2 ชุด
- fullWords ใช้จัดการข้อมูลคำศัพท์ มีการทำ Create, Edit, Delete, View ครบถ้วน
- message ใช้เก็บข้อมูลในกรณีที่ผู้ใช้อยากติดต่อไปยังผู้จัดทำ มีแค่ method POST อาจนำไปต่อยอดได้ในอนาคต

#### มีการทำ Vue router ทั้งหมด 4 page
- Home เป็นหน้าแรกของ web 
- WordList เป็นหน้าจัดการคำศัพท์ แยก component ย่อยออกเป็น
  > - CreateEditWord เป็น form ที่ใช้ในการเพิ่มและแก้ไขคำศัพท์ จะมีการแจ้งเตือนหากผู้ใช้กรอกข้อมูลไม่ครบทุกช่อง หรือกรอกข้อมูลตรงกับคำศัพท์ที่มีอยู่แล้ว
  > - ShowWords เป็นตารางแสดงข้อมูลคำศัพท์ทั้งหมด รวมถึงส่วนของการลบคำศัพท์ด้วย ผู้ใช้สามารถเลือกลบคำศัพท์ที่ละหลายรายการ หรือลบทั้งหมดได้
- Random ใช้ในการจัดการเกี่ยวกับการสุ่มคำศัพท์
- ContantUs แยก component ออกเป็น
  > - MemberList แสดงรายการข้อมูลของผู้จัดทำทั้งหมด
  > - ContactUsForm เป็น form ที่ใช้ในการติดต่อกับผู้จัดทำ ผู้ใช้สามารถระบุช่องทางการติดต่อกลับพร้อมทั้งส่งข้อความในประเด็นต่างๆให้กับผู้จัดทำได้

## Reference about style CSS
> - [Home Page](https://www.youtube.com/watch?v=lAOkx2yZESY&t=733s)
> - [ContactUs Page](https://www.youtube.com/watch?v=gggB0Nq5vBk&t=38s)

 
 
## Member
- 63130500112 นางสาว สริดา บัวแก้ว
- 63130500116 นางสาว สาริศา ภูละคร
- 63130500119 นาย สิรภพ ภัทรเกษวิทย์
- 63130500123 นางสาว สุพิชญา หมื่นนุช
- 63130500156 นาย ธนัตถ์ ลีเรืองกิจ

