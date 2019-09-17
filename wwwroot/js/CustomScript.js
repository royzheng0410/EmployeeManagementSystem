function confirmDelete(uniqueId, isDeleteClicked) {
    var deleteSpan = 'deleteSpan_' + uniqueId;
    var confirmSpan = 'confirmDeleteSpan_' + uniqueId;
    if (isDeleteClicked) {
        $('#' + deleteSpan).hide();
        $('#' + confirmSpan).show();
    } else {
        $('#' + deleteSpan).show();
        $('#' + confirmSpan).hide();
    }
}