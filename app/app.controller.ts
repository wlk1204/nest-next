import { Controller, Get, Render, Query } from '@nestjs/common'

@Controller()
export class AppController {
  @Render('A')
  @Get()
  public index(@Query() name?: string) {
    return {
      title: 'Next with nest',
      name,
    }
  }

  @Render('omim')
  @Get('omim')
  public main(@Query() name?: string) {
    return {
      title: 'Next with nest',
      name,
    }
  }

  @Render('omis')
  @Get('omis')
  public omis(@Query() name?: string) {
    return {
      title: 'Next with nest',
      name,
    }
  }

  @Render('omi')
  @Get('omi')
  public omi(@Query() name?: string) {
    return {
      title: 'Next with nest',
      name,
    }
  }
}
