<script lang="ts" setup>


const parnasaSum = [
  {
    title: 'משרות',
    number: 5000,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'משתתפים',
    number: 5000,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'משרות',
    number: 5000,
    logo: 'i-heroicons-user-group'
  },
  {
    title: 'חברות',
    number: 350,
    logo: 'i-heroicons-users'
  }
]

</script>

<template>
  <div class="text-center t">
    <UContainer class="py-20">
      <div class="text-7xl text-gold">פרנסה - בהיתר ובכבוד</div>
      <div class="text-3xl mt-10 md:px-20 ">לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית סחטיר בלובק. תצטנפל
        בלינדו
        למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך חקיגו רוגצה.</div>
      <div class="flex justify-center gap-10 flex-wrap my-20">
        <CardSum v-for="obj in parnasaSum" :title="obj.title" :number="obj.number" :logo="obj.logo" />
      </div>
    </UContainer>

    <div class="bg-gold-light text-blue-custom">
      <UContainer id="about" class="py-20">
        <div class="text-3xl mb-14 text-gold text-center font-bold">אודות</div>
        <div class="flex flex-wrap justify-center gap-20 text-xl">
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4"> מה זה "פרנסה"?
            </div>
            <div class="text-justify">
              "פרנסה - בהיתר ובכבוד" הוקם בארץ ישראל בשביל לעזור ולכוון אברכים הצריכים לצאת להביא פרנסה לביתם ומחפשים
              עבודה
              שתתאים להם ותכלכלם בכבוד ובהיתר ''פרנסה'' עוזרים לו למצוא את המקום הנכון והמתאים ביתור עבורו על פי כשרוניו
              ולפי
              יכולותיו מבלי שיצטרך לוותר על הערכים התורנים, ''פרנסה'' מלווים את האברכים הפונים לבקשת עזרה מהרגע שמתקשרים
              ועד
              שבס''ד מתקבלים לעבודה במשרה שמתאימה להם ומחילים לעבוד בפועל, וממשיכים אח''כ ללוות את האברכים ועוזרים להם
              להתקדם
              בעבודה בכדי שיגיעו למיקסום כושר ההשתכרות שלהם ומימוש כשרונותיהם שלהם ויתפרנסו בכבוד ובהיתר.
              ''פרנסה'' הינו ארגון שמחבר בין המעסיקים שמחפשים עובדים לאברכין שמחפשים עבודה,
            </div>
          </div>
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4"> הפעילות של "פרנסה"?
            </div>
            <div class="text-justify"> פרנסה" הכווין ועזר בשנה האחרונה יותר מ 300 בעלי משפחות אשר מתפרנסים כהיום בכבוד
              ובהיתר, יותר מאלף
              ילדים
              שנשתנה
              חייהם
              בזה שאבא קיבל מעמד פרנסה מכובד. משפחה ללא פרנסה חסר מישהו במשפחה. ורחבות הדעת שיש מה לאכול ומה ללבוד בצורה
              מכובדת
              בבית כשאברכים מגיעים למשרד ומספרים שלפני שהיה להם מעמד פרנסה היה להם דחקות בבית שמביא לידיי כל הצרות ח"ו,
              מהיום
              שקיבלו את העזרה מפרנסה ובס"ד נעמדו על רגליהם ביתם נהפך להם למקום שמח ויכולים לחנך ילדייהם עם רוגע נפשי,
            </div>
          </div>
          <div class="max-w-[500px]">
            <div class="font-bold text-2xl mb-4"> מי עומד מאחורי "פרנסה"?
            </div>

            <div class="text-justify"> "פרנסה - בהיתר ובכבוד" הינו יוזמתם של רבנים מכלל גווני הקשת החרדית, שהיו ערים
              למצוקת הפרנסה שפקד את
              המוני
              היהדות
              החרדית בארץ הקודש שגורמים לבעיות שלום בית וחינוך וכו'.

              וזכה לתמיכתם ולברכתם הנלהבת של כל גדולי הדור שליט"א, שראו בכך הצלה ממשית לדור. והגדירו אותו כ'שמירה של
              הדור'
              על
              הבית
              היהודי בדורנו הן מבחינה רוחנית והן מבחינה גשמית.

            </div>
          </div>
        </div>
      </UContainer>
    </div>

    <UContainer class="py-20">
      <div id="contact" class="mb-12">
        <div class="text-3xl text-custom-gold text-center mt-10">צור קשר</div>
        <form class="flex flex-col gap-4 max-w-96 mx-auto my-12">
          <div class="w-full">
            <UInput placeholder="שם" />
          </div>
          <div class="w-full">
            <UInput placeholder="מייל" />
          </div>
          <UTextarea placeholder="הודעה" />
          <UButton class="w-full bg-gold hover:bg-gold-light rounded-full">שלח</UButton>
        </form>
        <div>
          <div class="text-center text-3xl text-custom-gold">כתובת</div>
          <div class="text-center text-3xl text-gold">ישראל, ישראל</div>
        </div>
      </div>
    </UContainer>
  </div>

</template>

<style scoped>

</style>