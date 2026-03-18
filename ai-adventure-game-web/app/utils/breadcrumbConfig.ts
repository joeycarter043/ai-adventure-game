// adventure-game-web/app/utils/breadcrumbConfig.ts

export const BREADCRUMB_MAP: Record<string, string> = {
  // 基础级
  '/project': 'scenario_task.breadcrumb.project_select',
  '/learning': 'home_page.knowledge_learning',
  '/profile': 'header.profile',
  
  // 业务级
  '/project/scenario': 'scenario_task.breadcrumb.scenario_select',
  // 动态级：这一级通常显示具体的任务名称
  '/project/scenario/task-card': 'DYNAMIC_TITLE', 
  // 详情级：即使别的模块也有 detail，这里的全路径是唯一的
  '/project/scenario/task-card/detail': 'scenario_task.stories.title',
  '/project/scenario/task-card/bill-template': 'scenario_task.breadcrumb.bill_template',
  '/project/scenario/task-card/trade-terms-guide': 'scenario_task.breadcrumb.trade_terms_guide',
}