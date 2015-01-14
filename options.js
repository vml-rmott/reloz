/**
 * Created by rmott on 1/13/15.
 */

function save_options() {
    var label = document.getElementById('label').value;
    var fromColor = document.getElementById('fromColor').value;
    var toColor = document.getElementById('toColor').value;
    chrome.storage.sync.set({
        label: label,
        fromColor: fromColor,
        toColor: toColor
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    // Use default value color yellow => red and label: 'Blocked'.
    chrome.storage.sync.get({
        label: 'Blocked',
        fromColor: 'yellow',
        toColor: 'warm-red'
    }, function(items) {
        document.getElementById('label').value = items.label;
        document.getElementById('fromColor').value = items.fromColor;
        document.getElementById('toColor').value = items.toColor;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
