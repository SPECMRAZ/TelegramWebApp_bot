import { Injectable } from '@nestjs/common';
import { Telegraf } from 'telegraf';

@Injectable()
export class AppBot {
  private readonly bot: Telegraf;
  private readonly Token: string = process.env.BOT;
  private readonly WebAppUrl: string = process.env.WEB

  constructor() {
    this.bot = new Telegraf(this.Token);
    this.botSets();
  }

  private async botSets() {

    this.bot.command('start', async (ctx) => {
      await ctx.reply(`Hello, ${ctx.from.first_name}!`, {
        reply_markup: {
          keyboard: [
            [{ text: 'Регистрация!', web_app: { url: this.WebAppUrl } }]
          ]
        }
      });

    })

    this.bot.on('web_app_data', async (ctx) => {
      const { name, email, password } = JSON.parse(ctx.update.message.web_app_data.data);

      await ctx.reply(`Ваше имя: ${name}.`);
      await ctx.reply(`Ваш имейл: ${email}.`);
      await ctx.reply(`Ваш пароль: ${password}.`);
      await ctx.reply('Вы согласны с условиями и быть хорошим мальчиком!😉');
    });
  };

  async startBot() {
    await this.bot.launch();
    process.once('SIGINT', () => this.bot.stop('SIGINT'));
    process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
  }

}
