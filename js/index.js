const selectors = {
  appBar: 'app-bar',
  popoverMenu: 'popover-menu',
  chatIconButton: 'nav-chat-icon-button',
  chatPopoverMenu: 'nav-chat-popover-menu'
};

$(function() {
  const { chatIconButton, popoverMenu, chatPopoverMenu } = selectors;

  $(`#${chatIconButton}`).on('click', function() {
    $(`#${chatPopoverMenu}`).toggleClass(`${popoverMenu}__shown`);
  });
});
